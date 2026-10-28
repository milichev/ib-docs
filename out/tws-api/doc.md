[source](https://www.interactivebrokers.com/docs/tws-api/doc/introduction)

# Introduction

The TWS API is a TCP Socket Protocol API based on connectivity to the Trader Workstation or IB Gateway. The API acts as an interface to retrieve and send data autonomously to Interactive Brokers. Interactive Brokers provides code systems in Python, Java, C++, C#, and VisualBasic.

The TWS API is a message protocol as its core, and any library that implements the TWS API, whether created by IB or someone else, is a tool to send and receive these messages over a TCP socket connection with the IB host platform (TWS or IB Gateway). As such the system can be tweaked and modified into any language of interest given the intention to translate the underlying decoder.

In short, a library written in any other languages must be sending and receiving the same data in the same format as any other conformant TWS API library, so users can look at the documentation for our libraries to see what a given request or response consists of (what it must include, in what form, etc.) and implement them in their own structure.

Our TWS API components are aimed at experienced professional developers willing to enhance the current TWS functionality. Before you use TWS API, please make sure you fully understand the concepts of OOP ([https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/](https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/)) and other Computer Science Concepts. Regrettably, Interactive Brokers cannot offer any programming consulting. Before contacting our API support, please always refer to our available documentation, sample applications and Recorded Webinars

This guide references the Java, VB, C#, C++ and Python Testbed sample projects to demonstrate the TWS API functionality. Code snippets are extracted from these projects and we suggest all those users new to the TWS API to get familiar with them in order to quickly understand the fundamentals of our programming interface. The Testbed sample projects can be found within the samples folder of the TWS API's installation directory.
