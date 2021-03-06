---
layout: post
title: Binomial Coefficient
subtitle: Dynamic Programming Paradigm
date: 2019-07-01
author: Jalever
header-img: img/post-bg-algorithm.jpg
catalog: true
tags:
  - Algorithm
---
- [Common Definition](#common-definition)
    - [Coefficient](#coefficient)
    - [Binomial Theorem](#binomial-theorem)
    - [Binomial Coefficient](#binomial-coefficient)
    - [Pascal Triangle](#pascal-triangle)
- [The Problem](#the-problem)
    - [Optimal Substructure](#optimal-substructure)
    - [Overlapping Subproblems](#overlapping-subproblems)
    - [Space Optimized Version of Overlapping Subproblems](#space-optimized-version-of-overlapping-subproblems)
        - [Explanation](#explanation)

## Common Definition
#### Coefficient
In <strong>Mathematics</strong>, a <strong>Coefficient</strong> is a multiplicative factor in some term of a <ins>polynomial</ins>, a <ins>series</ins>, or <ins>any expression</ins>; it is usually a <ins>number</ins>, but may be <ins>any expression</ins>. In the latter case, the variables appearing in the coefficients are often called <strong>Parameter</strong>s, and must be clearly distinguished from the other variables.

For example, in
![ZOspFA.png](https://s2.ax1x.com/2019/07/18/ZOspFA.png)
the first two terms respectively have the coefficients `7` and `−3`. The third term `1.5` is a constant coefficient. The final term does not have any explicitly written coefficient, but is considered to have coefficient `1`, since multiplying by that factor would not change the term.

Often <strong>Coefficient</strong>s are numbers as in this example, although they could be <strong>parameter</strong>s of the problem or <strong>any expression</strong> in these parameters. In such a case one must clearly distinguish between <ins>symbols representing variables</ins> and <ins>symbols representing parameters</ins>. Following <strong>René Descartes</strong>, the <strong>variables</strong> are often denoted by `x, y, ...`, and the <strong>parameter</strong>s by `a, b, c, ...`, but it is not always the case. For example, if `y` is considered as a parameter in the above expression, the coefficient of `x` is `−3y`, and the constant coefficient is `1.5 + y`.

When one writes
![ZOsllV.png](https://s2.ax1x.com/2019/07/18/ZOsllV.png)
it is generally supposed that `x` is the only variable and that `a`, `b` and `c` are parameters; thus the constant coefficient is `c` in this case.

#### Binomial Theorem
In <strong>Elementary Algebra</strong>, the <strong>Binomial Theorem</strong>(or <strong>Binomial Expansion</strong>) describes the algebraic expansion of powers of a binomial. According to the theorem, it is possible to expand the polynomial `(x + y)^n` into a sum involving terms of the form `a * x^b * y^c`, where the exponents `b` and `c` are nonnegative integers with `b + c = n`, and the coefficient `a` of each term is a specific positive integer depending on `n` and `b`. For example (for n = 4),
![ZO2roF.png](https://s2.ax1x.com/2019/07/18/ZO2roF.png)

The coefficient `a` in the term of `a * x^b * y^c` is known as the <strong>Binomial Coefficient</strong> ![ZOhf9e.png](https://s2.ax1x.com/2019/07/18/ZOhf9e.png) or ![ZO4nD1.png](https://s2.ax1x.com/2019/07/18/ZO4nD1.png) (the two have the same value). These coefficients for varying `n` and `b` can be arranged to form <strong>Pascal's Triangle</strong>. These numbers also arise in <strong>Combinatorics</strong>, where ![ZOhf9e.png](https://s2.ax1x.com/2019/07/18/ZOhf9e.png) gives the number of different combinations of `b` elements that can be chosen from an n-element set. Therefore ![ZOhf9e.png](https://s2.ax1x.com/2019/07/18/ZOhf9e.png) is often pronounced as "n choose b".

#### Binomial Coefficient
In <strong>Mathematics</strong>, the <strong>Binomial Coefficients</strong> are the positive integers that occur as coefficients in the <strong>Binomial Theorem</strong>. Commonly, a <strong>Binomial Coefficient</strong> is indexed by a pair of integers `0 <= k <= n` and is written ![ZO5CMd.png](https://s2.ax1x.com/2019/07/18/ZO5CMd.png). It is the coefficient of the `x^k` term in the <strong>Polynomial Expansion</strong> of the <strong>Binomial Power</strong> `(1 + x)^n`, and it is given by the formula
![ZO5KMj.png](https://s2.ax1x.com/2019/07/18/ZO5KMj.png)

For example, the fourth power of `1 + x` is
![ZO53d0.png](https://s2.ax1x.com/2019/07/18/ZO53d0.png)
and the binomial coefficient![ZO5JiT.png](https://s2.ax1x.com/2019/07/18/ZO5JiT.png)is the coefficient of the `x^2` term.

Arranging the numbers ![ZOIeTx.png](https://s2.ax1x.com/2019/07/18/ZOIeTx.png)in successive rows for `n = 0, 1, 2,...` gives a triangular array called <strong>Pascal's Triangle</strong>, satisfying the <strong>Recurrence Relation</strong>.
![ZOIw9S.png](https://s2.ax1x.com/2019/07/18/ZOIw9S.png)

The binomial coefficients occur in many areas of mathematics, and especially in combinatorics. The symbol ![ZO5CMd.png](https://s2.ax1x.com/2019/07/18/ZO5CMd.png) is usually read as "n choose k" because there are ![ZO5CMd.png](https://s2.ax1x.com/2019/07/18/ZO5CMd.png) ways to choose an (unordered) subset of `k` elements from a fixed set of `n` elements. For example, there are ![ZOI5jJ.png](https://s2.ax1x.com/2019/07/18/ZOI5jJ.png) ways to choose 2 elements from `{1, 2, 3, 4}`, namely `{1, 2}`, `{1, 3}`, `{1, 4}`, `{2, 3}`, `{2, 4}` and  `{3, 4}`.

#### Pascal Triangle
In <strong>Mathematics</strong>, <strong>Pascal's Triangle</strong> is a triangular array of the <strong>Binomial Coefficient</strong>s.

The rows of <strong>Pascal's Triangle</strong> are conventionally enumerated starting with row `n = 0` at the top (the 0th row). The entries in each row are numbered from the left beginning with `k = 0` and are usually staggered relative to the numbers in the adjacent rows. The triangle may be constructed in the following manner: In `row 0` (the topmost row), there is a unique nonzero entry `1`. Each entry of each subsequent row is constructed by adding <ins>the number above and to the left</ins> with <ins>the number above and to the right</ins>, treating blank entries as `0`. For example, the initial number in the first (or any other) row is `1` (the sum of `0` and `1`), whereas the numbers `1` and `3` in the third row are added to produce the number `4` in the fourth row.

![ZO56JO.gif](https://s2.ax1x.com/2019/07/18/ZO56JO.gif)
For example, the fourth power of `1 + x` is
![ZO53d0.png](https://s2.ax1x.com/2019/07/18/ZO53d0.png)

## The Problem
Write a function that takes two parameters `n` and `k` and returns the value of Binomial Coefficient ![ZO5CMd.png](https://s2.ax1x.com/2019/07/18/ZO5CMd.png). For example, your function should return 6 for `n = 4` and `k = 2`, and it should return `10` for `n = 5` and `k = 2`.

#### Optimal Substructure
The value of ![ZO5CMd.png](https://s2.ax1x.com/2019/07/18/ZO5CMd.png) can be recursively calculated using following standard formula for Binomial Coefficients.
![ZvSGtS.png](https://s2.ax1x.com/2019/07/19/ZvSGtS.png)
Following is a simple recursive implementation that simply follows the recursive structure mentioned above.

```cpp
#include <iostream>
using namespace std;

int BinomialCoefficient(int n,int k) {
	if(k == 0 || k == n) {
		return 1;
	}

	return ::BinomialCoefficient(n-1, k-1) + ::BinomialCoefficient(n-1, k);
}

int main() {
	int n, k;
	cout << "Please input a n: ";
	cin >> n;
	cout << "Please input a k: ";
	cin >> k;

	int value = BinomialCoefficient(n, k);
	cout << "The value of Binomial Coefficient C(" << n << "," << k <<") is " << value << endl;

	return 0;
}
```

#### Overlapping Subproblems
It should be noted that the above function computes the same subproblems again and again. See the following recursion tree for `n = 5` an `k = 2`. The function `C(3, 1)` is called two times. For large values of `n`, there will be many common subproblems.
![Zvpsbt.png](https://s2.ax1x.com/2019/07/19/Zvpsbt.png)
Since same suproblems are called again, this problem has <strong>Overlapping Subproblems property</strong>. So the <strong>Binomial Coefficient Problem</strong> has both properties (<ins>Optimal Substructure</ins> and <ins>Overlapping Subproblems</ins>) of a <strong>Dynamic Programming Problem</strong>. Like other typical <strong>Dynamic Programming</strong>(DP) problems, re-computations of same subproblems can be avoided by constructing a temporary array `C[][]` in bottom up manner. Following is <strong>Dynamic Programming</strong> based implementation.
```cpp
#include <iostream>
using namespace std;

int getMinimum(int a,int b){
	return (a < b) ? a : b;
}

int BinomialCoefficient(int n,int k) {
	int arr[n+1][k+1];

	for(int i = 0;i <= n;i++) {
		for(int j = 0;j <= ::getMinimum(i, j);j++) {
			if(j == 0 || j == i) {
				arr[i][j] = 1;
			} else {
				arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
			}
		}
	}

	return arr[n][k];
}

int main() {
	int n, k;
	cout << "Please input a n: ";
	cin >> n;
	cout << "Please input a k: ";
	cin >> k;

	int value = BinomialCoefficient(n, k);
	cout << "The value of Binomial Coefficient C(" << n << "," << k <<") is " << value << endl;

	return 0;
}
```
<strong>Time Complexity</strong>: O(n*k)

<strong>Auxiliary Space</strong>: O(n*k)

#### Space Optimized Version of Overlapping Subproblems
```cpp
#include <iostream>
#include <string.h>

using namespace std;

int getMinimum(int a,int b){
	return (a < b) ? a : b;
}

int BinomialCoefficient(int n,int k) {
	int arr[k+1];
	memset(arr, 0, sizeof(arr));

	arr[0] = 1;

	for(int i = 1;i <= n;i++){
		for(int j = ::getMinimum(i, k);j > 0;j--) {
			arr[j] = arr[j] + arr[j-1];
		}
	}

	return arr[k];
}

int main() {
	int n, k;
	cout << "Please input a n: ";
	cin >> n;
	cout << "Please input a k: ";
	cin >> k;

	int value = BinomialCoefficient(n, k);
	cout << "The value of Binomial Coefficient C(" << n << "," << k <<") is " << value << endl;

	return 0;
}
```
<strong>Time Complexity</strong>: O(n*k)

<strong>Auxiliary Space</strong>: O(k)

> The memset() function in C++ copies a single character for a specified number of time to an object.
> void* memset( void* dest, int ch, size_t count );
> - dest: Pointer to the object to copy the character.
> - ch: The character to copy.
> - count: Number of times to copy.

###### Explanation
```text
Let's say we want to calculate C(4, 3),
i.e. n=4, k=3:

All elements of array C of size 4 (k+1) are
initialized to ZERO.

i.e. C[0] = C[1] = C[2] = C[3] = C[4] = 0;
Then C[0] is set to 1

For i = 1:
C[1] = C[1] + C[0] = 0 + 1 = 1 ==>> C(1,1) = 1

For i = 2:
C[2] = C[2] + C[1] = 0 + 1 = 1 ==>> C(2,2) = 1
C[1] = C[1] + C[0] = 1 + 1 = 2 ==>> C(2,2) = 2

For i=3:
C[3] = C[3] + C[2] = 0 + 1 = 1 ==>> C(3,3) = 1
C[2] = C[2] + C[1] = 1 + 2 = 3 ==>> C(3,2) = 3
C[1] = C[1] + C[0] = 2 + 1 = 3 ==>> C(3,1) = 3

For i=4:
C[4] = C[4] + C[3] = 0 + 1 = 1 ==>> C(4,4) = 1
C[3] = C[3] + C[2] = 1 + 3 = 4 ==>> C(4,3) = 4
C[2] = C[2] + C[1] = 3 + 3 = 6 ==>> C(4,2) = 6
C[1] = C[1] + C[0] = 3 + 1 = 4 ==>> C(4,1) = 4

C(4,3) = 4 is would be the answer in our example.
```
