.. Hatsune Miku Theme - reStructuredText Showcase
.. No color screams. Every color sings.

======================
Hatsune Miku Theme
======================

:Author: Miku Fan
:Version: 3.9.39
:Date: 2024-01-15

.. contents:: Table of Contents
   :depth: 3
   :local:

Introduction
============

Welcome to the **Miku Stage**! This document demonstrates reStructuredText
syntax highlighting for the *Hatsune Miku VS Code theme*.

The canonical color is ``#39C5BB``.

Section Levels
==============

Level 2 Heading
---------------

Level 3 Heading
~~~~~~~~~~~~~~~

Level 4 Heading
^^^^^^^^^^^^^^^

Level 5 Heading
"""""""""""""""

Text Formatting
===============

Inline Markup
-------------

- **Bold text** for strong emphasis
- *Italic text* for emphasis
- ``Inline code`` for literals
- :emphasis:`Role-based emphasis`
- :strong:`Role-based strong`
- :literal:`Role-based literal`
- :code:`Role-based code`

Special Characters
------------------

- En-dash: --
- Em-dash: ---
- Ellipsis: ...
- Non-breaking space: |nbsp|

.. |nbsp| unicode:: 0xA0

Subscript and Superscript
-------------------------

H\ :sub:`2`\ O is water.

E = mc\ :sup:`2`

Lists
=====

Bullet Lists
------------

* First item
* Second item

  * Nested item 1
  * Nested item 2

* Third item

Numbered Lists
--------------

1. First step
2. Second step
3. Third step

   a. Sub-step A
   b. Sub-step B

4. Fourth step

Definition Lists
----------------

Term 1
    Definition for term 1.

Term 2
    Definition for term 2, which can be
    multiple lines.

Field Lists
-----------

:Name: Hatsune Miku
:Version: V2 Classic
:Color: #39C5BB
:Release: 2007

Option Lists
------------

-a            Short option
-b file       Option with argument
--long        Long option
--output=FILE Long option with value

Code Blocks
===========

Literal Block
-------------

::

    def sing(song):
        """Perform a song."""
        print(f"[MIKU] Now singing: {song}")

Code with Syntax Highlighting
-----------------------------

.. code-block:: python
   :linenos:
   :emphasize-lines: 3,5

   class DigitalDiva:
       """Virtual Singer class."""

       CANONICAL_COLOR = "#39C5BB"

       def __init__(self, name="Hatsune Miku"):
           self.name = name
           self._energy = 100

       def sing(self, song):
           if self._energy < 10:
               raise ValueError("Low energy")
           self._energy -= 10
           return f"[MIKU] Now singing: {song}"

.. code-block:: javascript

   const miku = {
     name: 'Hatsune Miku',
     color: '#39C5BB',
     sing: (song) => `Now playing: ${song}`
   };

.. code-block:: bash

   #!/bin/bash
   npm run build
   npm run readability

Parsed Literal
--------------

.. parsed-literal::

   The version is |version|.
   The release date is |today|.

Tables
======

Simple Table
------------

=====  =====  ======
Col 1  Col 2  Col 3
=====  =====  ======
A      B      C
1      2      3
X      Y      Z
=====  =====  ======

Grid Table
----------

+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  |
+============+============+===========+
| Cell 1     | Cell 2     | Cell 3    |
+------------+------------+-----------+
| Cell 4     | Cell 5     | - Item 1  |
|            |            | - Item 2  |
+------------+------------+-----------+

CSV Table
---------

.. csv-table:: Voice Bank Versions
   :header: "Version", "Year", "Color"
   :widths: 20, 15, 20

   "V2 Classic", "2007", "#39C5BB"
   "Append", "2010", "Various"
   "V3", "2013", "#39C5BB"
   "NT", "2020", "#00BCD4"

List Table
----------

.. list-table:: Features
   :widths: 25 75
   :header-rows: 1

   * - Feature
     - Description
   * - Syntax Highlighting
     - Beautiful colors based on Miku's palette
   * - Semantic Tokens
     - Enhanced highlighting for modern languages

Links and References
====================

External Links
--------------

Visit `Crypton Future Media <https://www.crypton.co.jp/>`_ for more info.

Or use anonymous links: `Miku Wiki`__

__ https://en.wikipedia.org/wiki/Hatsune_Miku

Internal References
-------------------

See the `Introduction`_ section above.

Or reference by label: :ref:`custom-label`

.. _custom-label:

Custom Label Section
~~~~~~~~~~~~~~~~~~~~

This section has a custom label.

Footnotes
---------

Miku was released in 2007 [1]_ and became a cultural phenomenon [2]_.

.. [1] First VOCALOID2 product by Crypton Future Media.
.. [2] Referenced in academic papers on virtual idols.

Citations
---------

According to [CryptonFM2007]_, Miku's voice was sampled from Saki Fujita.

.. [CryptonFM2007] Crypton Future Media. *Hatsune Miku Product Page*. 2007.

Images and Figures
==================

.. image:: images/miku-logo.png
   :alt: Miku Logo
   :width: 200px
   :align: center

.. figure:: images/screenshot.png
   :alt: Theme Screenshot
   :scale: 50%
   :align: center

   Caption: The Hatsune Miku theme in action.

Admonitions
===========

.. note::
   This is a note admonition.

.. warning::
   This is a warning admonition.

.. tip::
   Use the Miku theme for comfortable coding!

.. important::
   The canonical color is #39C5BB.

.. caution::
   Low energy may affect performance.

.. danger::
   Do not modify core theme files directly.

.. error::
   An error occurred during synthesis.

.. hint::
   Press Ctrl+K Ctrl+T to change themes.

.. attention::
   New version available!

Directives
==========

.. topic:: Voice Bank Selection

   Choose the appropriate voice bank for your project.

.. sidebar:: Quick Reference
   :subtitle: Color Palette

   - Primary: #39C5BB
   - Secondary: #00BCD4
   - Accent: #E05096

.. rubric:: Rubric Title

This is content under a rubric.

.. epigraph::

   *"The number one princess in the world"*

   -- World is Mine

.. compound::

   This is a compound paragraph.

   It contains multiple elements that are
   logically connected.

Math
====

Inline math: :math:`E = mc^2`

Display math:

.. math::

   \int_{-\infty}^{\infty} f(x) \, dx = 1

   F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} \, dt

Raw Content
===========

.. raw:: html

   <div style="color: #39C5BB; font-weight: bold;">
     This is raw HTML content.
   </div>

Comments
========

.. This is a comment that won't appear in output.

..
   This is a multi-line comment.
   It spans several lines.
   None of this will appear in output.

Substitutions
=============

.. |miku| replace:: **Hatsune Miku**
.. |date| date:: %Y-%m-%d
.. |copy| unicode:: 0xA9

|miku| was released on |date|.

|copy| 2007 Crypton Future Media.

Index Entries
=============

.. index::
   single: Miku; Hatsune
   pair: voice; synthesis
   triple: virtual; singer; software

This section covers indexed topics.

Glossary
========

.. glossary::
   :sorted:

   VOCALOID
      A singing voice synthesizer software developed by Yamaha.

   Voice Bank
      A collection of voice samples used for synthesis.

   BPM
      Beats per minute, a measure of tempo.
