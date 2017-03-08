# Samchon Framework
[![NPM](https://nodei.co/npm/samchon.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/samchon)

GitHub Repository: https://github.com/samchon/framework


## What Samchon Framework is
### Object Oriented Network
![Network Connectivity to Class Relationship](http://samchon.github.io/framework/images/accessory/oon.png)

Samchon Framework is an OON (Object-Oriented Network) framework. You can compose network systems within framework of the Object-Oriented. 

No matter how enormous or complicated the network system is, **the system nodes are just objects** in the Samchon Framework. The framework defines <u>objects that represent the *system nodes*</u> and <u>deliver message by calling methods from objects to objects</u>. That's all.

### System Templates, Modules of OON
I repeat, Samchon is an OON (Object-Oriented Network) framework, composing of a network system within framework of the Object-Oriented. It means that **modulization** is possible with modules called **System Templates**. You can maximize **reusability** by using **System Templates**.

When you need a cloud system, use a System Template named [Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service). When you need a distributed processings system, use the [Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed-System). If you should implement a specific network system and the network system will be used repeatedly, then **modulize** it to be one of the **System Templates**.

Below **System Templates** are basically provided in the Samchon Framework:

  - [Cloud Service](https://github.com/samchon/framework/wiki/TypeScript-Templates-Cloud_Service): Cloud Server Template
  - [External System](https://github.com/samchon/framework/wiki/TypeScript-Templates-External-System): A template for 1: N composite relationship's network system.
    - [Parallel System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Parallel-System): Parallel Processing System Template.
    - [Distributed System](https://github.com/samchon/framework/wiki/TypeScript-Templates-Distributed-System): Distributed Processing System Template.

### [TypeScript-STL](https://github.com/samchon/typescript-stl), interaction with TypeScript and C\++
[![Supported Languages](http://samchon.github.io/framework/images/accessory/language_diagram.png)](#interaction)

The best solution for integrating and migrating a system built by different languages (TypeScript and C++) is to share the same designs and grammers. Those designs and grammers are unified. There are no other better solution than that. Samchon Framework provides the best solution.

Unifying designs can become true by utilizing the **Object-Oriented Network** paradigm with Samchon Framework. Unifying grammer can be done by using the [**TypeScript-STL**](https://github.com/samchon/tstl), a sub-project that migrated C\++'s STL (Standard Template Library) to TypeScript. You can use STL's containers and algorithms in TypeScript with the [**TypeScript-STL**](https://github.com/samchon/tstl). Not only can you unify designs, you can also unify grammers, algorithms and even data structures with the [**TypeScript-STL**](https://github.com/samchon/tstl).

#### Suggestion
If you're planning to build a cloud solution, then I sugguest you to follow such step:
  1. Fast Implementation
    1. Cloud Application with TypeScript & HTML 
    2. Cloud Service with TypeScripty & NodeJS
  2. Performance Improvement
    1. Heavy processes, distribute them to C\++ systems.
    2. Migrate Cloud server from TypeScript to C++ gradually.


## Installation
#### TypeScript
```bash
# Install NPM module.
npm install --save samchon
```

Installs Samchon-Framework from NPM module and imports the definition.

```typescript
/// <reference types="samchon" />
import samchon = require("samchon");
```

#### C++
Samchon Framework is a header only project. Linkages like LIB, DLL or SO are not required at all. **Just include header files what you want**. However, please take note that Samchon Framework has two dependencies you should install.
  - [Boost](http://www.boost.org) - essential.
  - [ODBC](https://en.wikipedia.org/wiki/Open_Database_Connectivity) - optional, required only when using SQL driver.

```cpp
#include <samchon/library.hpp>
#include <samchon/protocol.hpp>

#include <samchon/templates/service.hpp>
#include <samchon/templates/external.hpp>
#	include <samchon/templates/parallel.hpp>
#	include <samchon/templates/distributed.hpp>
```


## Documents
#### Architecture Designs
  - Class Diagrams
    - [TypeScript](http://samchon.github.io/framework/design/ts_class_diagram.pdf)
    - [C++](http://samchon.github.io/framework/design/cpp_class_diagram.pdf)
  - [Conceptual Diagram](http://samchon.github.io/framework/design/conceptual_diagram.pdf)
  - [Sequence Diagram](http://samchon.github.io/framework/design/sequence_diagram.pdf)

#### Guide Documents
  - [TypeScript](https://github.com/samchon/framework/wiki/TypeScript-Protocol-Basic_Components)
  - [C++](https://github.com/samchon/framework/wiki/CPP-Protocol-Basic_Components)
  - [Examples](https://github.com/samchon/framework/wiki/Examples-Interaction)
  
#### API Documents
  - **v2.0**
    - [**TypeScript**](http://samchon.github.io/framework/api/ts)
    - [__C++__](http://samchon.github.io/framework/api/cpp)
  - v1.0
    - [C++](http://samchon.github.io/framework/api/v1.0/cpp)
    - [Flex](http://samchon.github.io/framework/api/v1.0/flex)
