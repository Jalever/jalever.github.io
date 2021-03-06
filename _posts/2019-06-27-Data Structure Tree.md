---
layout: post
title: (DS Tree)Tree Overview
subtitle: Data Structure Tree
date: 2019-06-27
author: Jalever
header-img: img/post-bg-star.jpg
catalog: true
tags:
  - Data Structure
---

- [Introduction](#introduction)
- [Basic terminology](#basic-terminology)
    - [Root Node](#root-node)
    - [Sub Tree](#sub-tree)
    - [Leaf Node](#leaf-node)
    - [Path](#path)
    - [Ancestor node](#ancestor-node)
    - [Degree](#degree)
    - [Level Number](#level-number)
    - [Height](#height)
    - [Depth](#depth)
- [Representation by codes](#representation-by-codes)
    - [Static representation of tree](#static-representation-of-tree)
    - [Dynamic representation of tree](#dynamic-representation-of-tree)
- [Types of Tree](#types-of-tree)
    - [General Tree](#general-tree)
    - [Forests](#forests)
    - [Binary Tree](#binary-tree)
        - [Full Binary Tree](#full-binary-tree)
        - [Complete Binary Tree](#complete-binary-tree)
        - [Full Binary Tree and Complete Binary Tree](#full-binary-tree-and-complete-binary-tree)       
    - [Binary Search Tree](#binary-search-tree)
    - [Expression Tree](#expression-tree)
    - [Tournament Tree](#tournament-tree)

## Introduction
- A Tree is a recursive data structure containing the set of one or more data nodes where one node is designated as <ins>the root of the tree</ins> while the remaining nodes are called as <ins>the children of the root</ins>.
- The nodes other than the root node are partitioned into the non empty sets where each one of them is to be called `sub-tree`.
- Nodes of a tree either maintain a parent-child relationship between them or they are sister nodes.
- In a general tree, A node can have any number of children nodes but it can have only a single parent.
- The following image shows a tree, where the node A is the root node of the tree while the other nodes can be seen as the children of A.

![ZkInuF.png](https://s2.ax1x.com/2019/06/24/ZkInuF.png)

## Basic terminology
#### Root Node
The root node is the topmost node in the tree hierarchy. In other words, the root node is the one which doesn't have any parent.

#### Sub Tree
If the root node is not null, the tree T1, T2 and T3 is called sub-trees of the root node.

#### Leaf Node
The node of tree, which doesn't have any child node, is called `leaf node`. `Leaf node` is the bottom most node of the tree. There can be any number of leaf nodes present in a general tree. Leaf nodes can also be called external nodes.

#### Path
The sequence of consecutive edges is called path. In the tree shown in the above image, path to the node E is `A→ B → E`.

#### Ancestor node
An ancestor of a node is any predecessor node on a path from root to that node. The root node doesn't have any ancestors. In the tree shown in the above image, the node F have the ancestors, B and A.

#### Degree
Degree of a node is equal to number of children, a node have. In the tree shown in the above image, the degree of node B is 2. Degree of a leaf node is always 0 while in a complete binary tree, degree of each node is equal to 2.

#### Level Number
Each node of the tree is assigned a level number in such a way that each node is present at one level higher than its parent. Root node of the tree is always present at level 0.

#### Height
The height of a node is the number of edges on the longest path from the node to a leaf.
A leaf node will have a height of 0.

#### Depth
The depth of a node is the number of edges from the node to the tree's root node.
A root node will have a depth of 0.

![ZK1h5Q.png](https://s2.ax1x.com/2019/06/28/ZK1h5Q.png)

![ZK3roF.png](https://s2.ax1x.com/2019/06/28/ZK3roF.png)

## Representation by codes
#### Static representation of tree
![eXPzB8.png](https://s2.ax1x.com/2019/08/10/eXPzB8.png)

#### Dynamic representation of tree
![eXiYDK.png](https://s2.ax1x.com/2019/08/10/eXiYDK.png)

## Types of Tree
The tree data structure can be classified into six different categories.

[![Zkhgu4.md.png](https://s2.ax1x.com/2019/06/24/Zkhgu4.md.png)](https://imgchr.com/i/Zkhgu4)

#### General Tree
General Tree stores the elements in a hierarchical order in which the top level element is always present at level 0 as the root element. All the nodes except the root node are present at number of levels. The nodes which are present on the same level are called `siblings` while the nodes which are present on the different levels exhibit the parent-child relationship among them. A node may contain any number of sub-trees. The tree in which each node contain 3 sub-tree, is called `ternary tree`.

#### Forests
Forest can be defined as the set of disjoint trees which can be obtained by deleting the root node and the edges which connects root node to the first level node.
[![Zkh7vD.md.png](https://s2.ax1x.com/2019/06/24/Zkh7vD.md.png)](https://imgchr.com/i/Zkh7vD)

#### Binary Tree
Binary tree is a data structure in which each node can have at most 2 children. The node present at the top most level is called the `root node`. A node with the 0 children is called `leaf node`. Binary Trees are used in the applications like expression evaluation and many more.
![V41OqH.png](https://s2.ax1x.com/2019/06/14/V41OqH.png)

###### Full Binary Tree
A full Binary tree is a special type of binary tree in which every parent node has either two or no children.
![V41vdA.png](https://s2.ax1x.com/2019/06/14/V41vdA.png)

###### Complete Binary Tree
A complete binary tree is just like a full binary tree, but with two major differences
1. Every level must be completely filled
2. All the leaf elements must lean towards the left.
3. The last leaf element might not have a right sibling i.e. a complete binary tree doesn’t have to be a full binary tree.

###### Full Binary Tree and Complete Binary Tree
![V41jZd.png](https://s2.ax1x.com/2019/06/14/V41jZd.png)

#### Binary Search Tree
Binary search tree is an ordered binary tree. All the elements in the left sub-tree are less than the root while elements present in the right sub-tree are greater than or equal to the root node element. Binary search trees are used in most of the applications of computer science domain like searching, sorting, etc.

#### Expression Tree
Expression trees are used to evaluate the simple arithmetic expressions. Expression tree is basically a binary tree where internal nodes are represented by `operators` while the leaf nodes are represented by `operands`. Expression trees are widely used to solve algebraic expressions like (a+b)*(a-b).

Consider the following example:
![eXkW1s.png](https://s2.ax1x.com/2019/08/10/eXkW1s.png)

[![Zk4rdA.md.png](https://s2.ax1x.com/2019/06/24/Zk4rdA.md.png)](https://imgchr.com/i/Zk4rdA)

#### Tournament Tree
Tournament tree are used to record the winner of the match in each round being played between two players. Tournament tree can also be called as `selection tree` or `winner tree`. External nodes represent the players among which a match is being played while the internal nodes represent the winner of the match played. At the top most level, the winner of the tournament is present as the root node of the tree.

For example, tree .of a chess tournament being played among 4 players is shown as follows. However, the winner in the left sub-tree will play against the winner of right sub-tree.

![Zk4cJP.png](https://s2.ax1x.com/2019/06/24/Zk4cJP.png)
