---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation inject decorator
---
# inject <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { inject }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/testing"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.31.9/packages/testing/src/inject.ts#L0-L0">/packages/testing/src/inject.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">inject</span><span class="token punctuation">(</span>targets<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> func<span class="token punctuation">:</span> Function<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>done<span class="token punctuation">:</span> Function<span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">any</span><span class="token punctuation">;</span></code></pre>



<!-- Description -->
## Description

::: v-pre

The inject function is one of the TsExpressDecorator testing utilities.
It injects services into the test function where you can alter, spy on, and manipulate them.

The inject function has two parameters

* an array of Service dependency injection tokens,
* a test function whose parameters correspond exactly to each item in the injection token array.


:::