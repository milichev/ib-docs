#!/opt/homebrew/bin/bash

set -euo pipefail

[ -n "$BASH_SOURCE" ] && CURRENT_SCRIPT="$BASH_SOURCE" || { [ -n "$ZSH_VERSION" ] && CURRENT_SCRIPT=$(eval 'echo "${(%):-%x}"') || CURRENT_SCRIPT="$0"; }
SCRIPT_DIR="$(cd "$(dirname "$CURRENT_SCRIPT")" && pwd)"

declare -A MODELS=(
  [gemma]="onnx-community/embeddinggemma-2-ONNX"
  [minilm]="Xenova/all-MiniLM-L6-v2"
)

usage() {
  printf 'Usage: %s <mcp|sync|query> <gemma|minilm> [path|query]\n' "$(basename "$0")" >&2
  exit 2
}

[[ $# -ge 2 && $# -le 3 ]] || usage
MODE="$1"
MODEL="$2"
[[ -v "MODELS[$MODEL]" ]] || usage

DB_PATH="$SCRIPT_DIR/tmp/lancedb/$MODEL"
CACHE_DIR="$SCRIPT_DIR/tmp/models"
BASE_DIRS="$(printf '[\"%s/out\"]' "$SCRIPT_DIR")"
MODEL_NAME="${MODELS[$MODEL]}"

mkdir -p "$DB_PATH" "$CACHE_DIR"
export DB_PATH CACHE_DIR BASE_DIRS MODEL_NAME

case "$MODE" in
mcp)
  exec npx -y mcp-local-rag
  ;;
sync)
  SYNC_PATH="${3:-$SCRIPT_DIR/out}"
  [[ -d "$SYNC_PATH" ]] || {
    printf 'Sync path does not exist: %s\n' "$SYNC_PATH" >&2
    exit 1
  }
  started_at="$(date +%s)"
  npx -y mcp-local-rag sync "$SYNC_PATH"
  elapsed="$(($(date +%s) - started_at))"
  printf 'Elapsed: %ss\n' "$elapsed" >&2
  ;;
query)
  QUERY="${3:-order}"
  started_at="$(date +%s)"
  npx -y mcp-local-rag query "$QUERY"
  elapsed="$(($(date +%s) - started_at))"
  printf 'Elapsed: %ss\n' "$elapsed" >&2
  ;;
*)
  usage
  ;;
esac
