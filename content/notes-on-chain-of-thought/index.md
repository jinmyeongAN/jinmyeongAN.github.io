---
title: 'Notes on Chain-of-Thought: what the intermediate steps actually buy you'
date: '2024-11-13 14:00:00'
categories: reasoning
---

> **AI should be able to learn from just a few examples, like what humans usually do.**
>
> — _Denny Zhou_

## A concept I knew the name of, not the substance

It is hard to do NLP research without hearing about Chain-of-Thought (CoT) [1]. But when I stopped
to check, I realized I only held a shallow version of the idea — and had never properly read the
paper.

These notes are my attempt to work through CoT and its follow-ups, and to name the insight the line
of work is actually built on. They were heavily shaped by Denny Zhou's
["LLM Reasoning: Key Ideas and Limitations"](https://dennyzhou.github.io/LLM-Reasoning-Berkeley.pdf) [2].

## Prompt-based intermediate steps

*Intermediate steps* — the reasoning that leads to an answer rather than the answer itself — come up
constantly in the CoT literature.

The CoT paper's premise is that if you place few-shot examples containing those steps into the
prompt (problem + intermediate steps + answer), the model will produce its own intermediate steps
and, on tasks that require reasoning, arrive at a more accurate answer. Empirically this held: CoT
prompting produced a large jump over standard prompting [1].

CoT was not the first work to find that rationales help. Earlier work [3] showed the same, but
obtained the rationales by tuning the language model to emit them.

Which raises the question that interested me most:

> What does it mean that few-shot examples alone matched or exceeded what tuning achieved?

Learning an input–output pattern from a handful of examples, rather than from a large tuned corpus,
is a genuinely surprising capability. Is it that the model can decompose the problem into steps it
already finds easy, given only the prompt as a cue?

Zhou's answer [2] is that the model has acquired something like human reasoning — the same
capability that lets people generalize from a few examples. I find that framing suggestive but not
yet an explanation. Why should emitting the intermediate steps alongside the answer improve
accuracy at all?

## What intermediate steps do to the computation

There is work on exactly this [4]. Its hypothesis: CoT helps because it lets a transformer perform
**serial** computation, raising its effective expressiveness.

The argument rests on the fact that a transformer computes in parallel. A decoder-only transformer
is built on self-attention, which attends over the whole input at once rather than in sequence. It
therefore tries to solve a problem in a single step — fine for easy problems, but for anything
needing sequential reasoning, essential intermediate steps get skipped.

The second constraint is that the number of layers is fixed regardless of the input, which caps
expressiveness. CoT acts like extra layers: each emitted step is another round of computation the
model can condition on.

The experiments supporting these two claims are what I found most compelling in the paper. But a
doubt remains. If the model is imitating the intermediate steps in the few-shot examples, then:

> Will it reason robustly on a problem that differs in kind from the demonstrations?

## Robustness of CoT

Others have asked the same [5]. CoT struggles on problems harder than anything in the few-shot
examples, and the proposed fix is to decompose the hard problem into subproblems of the kind the
demonstrations do cover.

The analogy that helped me: much as a complex signal can be linearly decomposed into sines and
cosines, a hard problem is broken into subquestions and solved sequentially.

## Marginal vs. conditional probability

At this point CoT looked to me like it had no serious remaining flaw. Then one framing made clear
how far I still had to go.

What we actually want is the marginal probability P(answer | problem) — not the conditional
P(intermediate steps, answer | problem) that CoT decoding gives us. A whole line of work follows
from taking that distinction seriously.

That is where I will pick these notes up next.

## References

[1] [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/pdf/2201.11903)

[2] [LLM Reasoning: Key Ideas and Limitations](https://dennyzhou.github.io/LLM-Reasoning-Berkeley.pdf)

[3] [Program Induction by Rationale Generation](https://aclanthology.org/P17-1015.pdf)

[4] [Chain of Thought Empowers Transformers to Solve Inherently Serial Problems](https://openreview.net/pdf?id=3EWTEy9MTM)

[5] [Least-to-Most Prompting Enables Complex Reasoning in Large Language Models](https://arxiv.org/pdf/2205.10625)
