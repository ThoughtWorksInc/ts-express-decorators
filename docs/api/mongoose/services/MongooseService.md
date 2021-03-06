---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation MongooseService service
---
# MongooseService <Badge text="Service" type="service"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { MongooseService }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/mongoose"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.31.9/packages/mongoose/src/services/MongooseService.ts#L0-L0">/packages/mongoose/src/services/MongooseService.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> MongooseService <span class="token keyword">implements</span> <a href="/api/common/di/interfaces/OnInit.html"><span class="token">OnInit</span></a><span class="token punctuation">,</span> <a href="/api/common/server/interfaces/AfterRoutesInit.html"><span class="token">AfterRoutesInit</span></a> <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>expressApp<span class="token punctuation">:</span> <a href="/api/common/mvc/decorators/class/ExpressApplication.html"><span class="token">ExpressApplication</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $<span class="token function">onInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | <span class="token keyword">void</span><span class="token punctuation">;</span>
    $<span class="token function">afterRoutesInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> connectionOptions?<span class="token punctuation">:</span> Mongoose.ConnectionOptions<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token function">get</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Mongoose.Mongoose | undefined<span class="token punctuation">;</span>
    <span class="token function">has</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">$<span class="token function">onInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | <span class="token keyword">void</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">$<span class="token function">afterRoutesInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token function">connect</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> connectionOptions?<span class="token punctuation">:</span> Mongoose.ConnectionOptions<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token function">get</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Mongoose.Mongoose | undefined</code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token function">has</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span></code></pre>

</div>



:::