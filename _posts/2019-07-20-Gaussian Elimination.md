---
layout: post
title: Gaussian Elimination
subtitle: Linear Algebra
date: 2019-07-20
author: Jalever
header-img: img/math_bg_simple.png
catalog: true
tags:
  - Mathematics
---
- [Overview](#overview)
- [Definitions and example of algorithm](#definitions-and-example-of-algorithm)
    - [Row operations](#row-operations)
    - [Echelon form](#echelon-form)
    - [Example of the algorithm](#example-of-the-algorithm)
- [Applications](#applications)
    - [Computing determinants](#computing-determinants)
    - [Finding the inverse of a matrix](#finding-the-inverse-of-a-matrix)
    - [Computing ranks and bases](#computing-ranks-and-bases)

## Overview
<strong>Gaussian Elimination</strong>, also known as <strong>Row Reduction</strong>, is an algorithm in <strong>Linear Algebra</strong> for solving a <strong>System of Linear Equations</strong>. It is usually understood as a sequence of operations performed on the corresponding Matrix of coefficients. This method can also be used to find the <strong>Rank</strong> of a matrix, to calculate the <strong>Determinant</strong> of a matrix, and to calculate the inverse of an <strong>Invertible Square Matrix</strong>. The method is named after <i>Carl Friedrich Gauss</i>(1777–1855)

To perform <strong>Row Reduction</strong> on a Matrix, one uses a sequence of <strong>Elementary Row Operations</strong> to modify the matrix until the lower left-hand corner of the Matrix is filled with zeros, as much as possible. There are three types of elementary row operations:
- Swapping two rows,
- Multiplying a row by a nonzero number,
- Adding a multiple of one row to another row.

Using these operations, a Matrix can always be transformed into an <strong>Upper Triangular Matrix</strong>, and in fact one that is in <strong>Row Echelon Form</strong>. Once all of the <strong>Leading Coefficients</strong>(the leftmost nonzero entry in each row) are 1, and every column containing a <strong>Leading Coefficient</strong> has zeros elsewhere, the Matrix is said to be in <strong>Reduced Row Echelon Form</strong>. This final form is unique; in other words, it is independent of the sequence of row operations used. For example, in the following sequence of row operations (where multiple elementary operations might be done at each step), the third and fourth matrices are the ones in Row Echelon Form, and the final matrix is the unique Reduced Row Echelon Form.
![ZzjvgH.png](https://s2.ax1x.com/2019/07/20/ZzjvgH.png)

Using row operations to convert a Matrix into <strong>Reduced Row Echelon Form</strong> is sometimes called <strong>Gauss–Jordan Elimination</strong>. Some authors use the term <strong>Gaussian Elimination</strong> to refer to the process until it has reached its Upper Triangular, or (unreduced)Row Echelon Form. For computational reasons, when solving systems of Linear Equations, it is sometimes preferable to stop row operations before the Matrix is completely reduced.

## Definitions and example of algorithm
The process of row reduction makes use of Elementary Row Operations, and can be divided into two parts. The first part (sometimes called <strong>Forward Elimination</strong>) reduces a given system to <strong>Row Echelon Form</strong>, from which one can tell whether there are no solutions, a unique solution, or infinitely many solutions. The second part (sometimes called <strong>Back Substitution</strong>) continues to use row operations until the solution is found; in other words, it puts the matrix into <strong>Reduced Row Echelon Form</strong>.

Another point of view, which turns out to be very useful to analyze the algorithm, is that row reduction produces a <strong>Matrix Decomposition</strong> of the original matrix. The elementary row operations may be viewed as the multiplication on the left of the original matrix by <strong>Elementary Matrices</strong>. Alternatively, a sequence of elementary operations that reduces a single row may be viewed as multiplication by a <strong>Frobenius Matrix</strong>. Then the first part of the algorithm computes an <strong>LU Decomposition</strong>, while the second part writes the original matrix as the product of a uniquely determined invertible matrix and a uniquely determined reduced row echelon matrix.

#### Row operations
There are three types of Elementary Row Operations which may be performed on the rows of a matrix:
1. Swap the positions of two rows.
2. Multiply a row by a non-zero scalar.
3. Add to one row a scalar multiple of another.

If the Matrix is associated to a system of Linear Equations, then these operations do not change the solution set. Therefore, if one's goal is to solve a system of Linear Equations, then using these row operations could make the problem easier.

#### Echelon form
For each row in a Matrix, if the row does not consist of only zeros, then the leftmost nonzero entry is called the <strong>Leading Coefficient</strong>(or <strong>Pivot</strong>) of that row. So if two Leading Coefficients are in the same column, then a row operation of <ins>Type 3</ins> could be used to make one of those coefficients zero. Then by using the row swapping operation, one can always order the rows so that for every non-zero row, the Leading Coefficient is to the right of the Leading Coefficient of the row above. If this is the case, then matrix is said to be in <strong>Row Echelon Form</strong>. So the lower left part of the Matrix contains only zeros, and all of the zero rows are below the non-zero rows. The word "echelon" is used here because one can roughly think of the rows being ranked by their size, with the largest being at the top and the smallest being at the bottom.

For example, the following Matrix is in Row Echelon Form, and its Leading Coefficients are shown in red:
![Zzz4gg.png](https://s2.ax1x.com/2019/07/20/Zzz4gg.png)
It is in Echelon Form because the zero row is at the bottom, and the Leading Coefficient of the second row (in the third column), is to the right of the Leading Coefficient of the first row (in the second column).

A matrix is said to be in <strong>Reduced Row Echelon Form</strong> if furthermore all of the Leading Coefficients are equal to 1 (which can be achieved by using the Elementary Row Operation of <ins>Type 2</ins>), and in every column containing a Leading Coefficient, all of the other entries in that column are zero (which can be achieved by using Elementary Row Operations of <ins>Type 3</ins>).

#### Example of the algorithm
Suppose the goal is to find and describe the set of solutions to the following System of Linear Equations:
![eSp8T1.png](https://s2.ax1x.com/2019/07/20/eSp8T1.png)

The table below is the row reduction process applied simultaneously to the system of equations and its associated <strong>Augmented Matrix</strong>. In practice, one does not usually deal with the systems in terms of equations, but instead makes use of the augmented matrix, which is more suitable for computer manipulations. The row reduction procedure may be summarized as follows: eliminate `x` from all equations below `L1`, and then eliminate `y` from all equations below `L2`. This will put the system into <strong>Triangular Form</strong>. Then, using <strong>Back Substitution</strong>, each unknown can be solved for.
![eSpYY6.png](https://s2.ax1x.com/2019/07/20/eSpYY6.png)
The second column describes which row operations have just been performed. So for the first step, the `x` is eliminated from `L2` by adding `3/2 * L1` to `L2`. Next, `x` is eliminated from `L3` by adding `L1` to `L3`. These row operations are labelled in the table as
![eSpxB9.png](https://s2.ax1x.com/2019/07/20/eSpxB9.png)

Once `y` is also eliminated from the third row, the result is a system of Linear Equations in Triangular Form, and so the first part of the algorithm is complete. From a computational point of view, it is faster to solve the variables in reverse order, a process known as <strong>Back Substitution</strong>. One sees the solution is `z = −1`, `y = 3`, and `x = 2`. So there is a unique solution to the original system of equations.

Instead of stopping once the Matrix is in Echelon Form, one could continue until the Matrix is in <strong>Reduced Row Echelon Form</strong>, as it is done in the table. The process of row reducing until the Matrix is reduced is sometimes referred to as <strong>Gauss–Jordan Elimination</strong>, to distinguish it from stopping after reaching echelon form.

## Applications
Historically, the first application of the Row Reduction method is for solving <strong>Systems of Linear Equations</strong>. Here are some other important applications of the algorithm.

#### Computing determinants
To explain how <strong>Gaussian Elimination</strong> allows the computation of the Determinant of a Square Matrix, we have to recall how the elementary row operations change the determinant:
- Swapping two rows multiplies the determinant by −1
- Multiplying a row by a nonzero scalar multiplies the determinant by the same scalar
- Adding to one row a scalar multiple of another does not change the determinant.

If <strong>Gaussian Elimination</strong> applied to a square matrix `A` produces a Row Echelon Matrix `B`, let `d` be the product of the scalars by which the determinant has been multiplied, using the above rules.Then the determinant of `A` is the quotient by `d` of the product of the elements of the diagonal of `B`:
![eSPcfx.png](https://s2.ax1x.com/2019/07/20/eSPcfx.png)

Computationally, for an `n × n` matrix, this method needs only `O(n^3)` arithmetic operations, while solving by elementary methods requires `O(2^n)` or `O(n!)` operations. Even on the fastest computers, the elementary methods are impractical for `n` above `20`.

#### Finding the inverse of a matrix
A variant of <strong>Gaussian Elimination</strong> called <strong>Gauss–Jordan Elimination</strong> can be used for finding the inverse of a matrix, if it exists. If `A` is an `n × n` square matrix, then one can use row reduction to compute its <strong>Inverse Matrix</strong>, if it exists. First, the `n × n` <strong>Identity Matrix</strong> is augmented to the right of `A`, forming an `n × 2n` <strong>Block Matrix</strong> `[A | I]`. Now through application of elementary row operations, find the Reduced Echelon Form of this `n × 2n` matrix. The matrix `A` is invertible if and only if the left block can be reduced to the Identity Matrix `I`; in this case the right block of the final Matrix is ![eSeGW9.png](https://s2.ax1x.com/2019/07/20/eSeGW9.png). If the algorithm is unable to reduce the left block to `I`, then `A` is not invertible.

For example, consider the following matrix:
![eSi08P.png](https://s2.ax1x.com/2019/07/20/eSi08P.png)
To find the inverse of this matrix, one takes the following matrix augmented by the identity and row-reduces it as a `3 × 6` matrix:
![eSih80.png](https://s2.ax1x.com/2019/07/20/eSih80.png)
By performing row operations, one can check that the reduced row echelon form of this augmented matrix is
![eSibVJ.png](https://s2.ax1x.com/2019/07/20/eSibVJ.png)
One can think of each row operation as the left product by an Elementary Matrix. Denoting by `B` the product of these elementary matrices, we showed, on the left, that `BA = I`, and therefore, ![eSiXP1.png](https://s2.ax1x.com/2019/07/20/eSiXP1.png). On the right, we kept a record of `BI = B`, which we know is the inverse desired. This procedure for finding the inverse works for square matrices of any size.

#### Computing ranks and bases
The <strong>Gaussian Elimination</strong> algorithm can be applied to any `m × n` matrix `A`. In this way, for example, some `6 × 9` matrices can be transformed to a matrix that has a row echelon form like
![eSeoWj.png](https://s2.ax1x.com/2019/07/20/eSeoWj.png)
where the stars are arbitrary entries, and `a`,` b`, `c`, `d`, `e` are nonzero entries. This echelon matrix `T` contains a wealth of information about `A`: the <strong>Rank</strong> of `A` is `5`, since there are `5` nonzero rows in `T`; the <strong>Vector Space</strong> spanned by the columns of `A` has a basis consisting of its columns `1`, `3`, `4`, `7` and `9` (the columns with `a`, `b`, `c`, `d`, `e` in `T`), and the stars show how the other columns of `A` can be written as Linear Combinations of the basis columns. This is a consequence of the distributivity of the Dot Product in the expression of a linear map as a matrix.

All of this applies also to the reduced row echelon form, which is a particular row echelon format.
