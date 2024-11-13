---
emoji: ✍️
title: CoT에 대한 고찰
date: '2024-11-13 14:00:00'
author: 진명
tags: 오늘의 생각
categories: consideration
---

> **AI should be able to learn from just a few examples, like what humans usually do**
>
> \- _Denny Zhou_ -

## 🤔 의외로 잘 모르는 CoT

NLP 연구를 하면서 Chain-of-Thought (CoT) [1] 를 듣지 않기란 쉽지 않다.

그러나, 생각해보니 얕은 깊이의 개념 정도만 인지하고 있을뿐 CoT에 대해 깊이 생각해본적이 없고,

심지어 CoT 논문도 제대로 읽어본적도 없다..!!

이번 기회에 CoT 뿐만 아니라, 이후 후속연구도 보면서 CoT가 가지고 있는 **insight**을 파헤쳐 보려한다.

이번 글은 특히 [“LLM Reasoning: Key Ideas and Limitations”](https://dennyzhou.github.io/LLM-Reasoning-Berkeley.pdf) [2] 글에 큰 영향을 받았다.

## 📌 Prompt 기반 Intermediate steps (rationale)

CoT 논문을 보다보면 Intermediate steps이라는 용어가 자주 등장한다.

Intermediate steps이란 정답을 내기까지의 중간 과정을 의미한다.

CoT 논문에서는 이러한 Intermediate steps을 가지는 few-shots example를 prompt로 넣어줬을 때 (Problem + Intermediate steps + Answer), LLM은 reasoning을 필요로하는 task에서 중간과정을 포함해 보다 정확한 답을 낼 수 있다는 가정을 하고 있다.

그리고 실제로 CoT 기반의 프롬프트로 이전보다 월등히 높은 성능을 기록했다.[1]

사실 CoT가 rationale이 answer에 도움을 준다는 것을 처음으로 발견한 연구는 아니다. 이전에도 비슷한 연구 [3] 는 있었지만, 이 경우 언어모델을 tuning 함으로써 rationale을 내뱉게 했다.

여기서 한가지 궁금한 점이 생겼다.

> few-shots example 만으로 tuning 기반의 성능 또는 그 이상의 결과를 만들어냈다는 것은 무슨 의미일까?

수많은 데이터를 기반으로 input과 output간의 패턴을 tuning을 통해 파악하는게 아니라, a few example만으로 패턴을 파악한다는 사실은 놀라운 일이다.

LLM이 prompt 만으로 문제 해결 방법을 여러개로 쪼갤 수 있고, 쪼개진 작은 문제는 LLM 정도면 쉽게 해결할 수 있기 때문일까?

Denny zhou에 따르면 [2] LLM이 인간처럼 reasoning 할 수 있게 되었다고 설명한다. (인간이 reasoning 능력을 이용해 few example만으로 학습이 가능한 것처럼)

그러나 여전히 명확하지 않다.

CoT를 통해 answer와 함께 intermediate step을 출력하는 행위는 왜 LLM의 성능을 올려주는 것일까?

## 📌 Intermediate step(CoT)이 LLM에 미치는 영향

역시 이에 대한 연구도 존재한다. [4]

이 연구는 CoT가 answer에 도움을 주는 이유를 CoT는 transformer가 serial computation을 할 수 있도록 돕고 expressiveness를 높이기 때문이라는 가정을 세웠다.

이 가정은 기본적으로 transformer는 문제를 parallel하게 푼다는 사실을 기반으로 하고 있다.

다시 말해, decoder-only transformer는 self-attention을 기반으로 하는데, 이는 모든 input을 순서대로가 아니라 한번에 보는 것을 의미한다.

이 경우 하나의 problem을 one step에 풀어버리는데, 간단한 문제의 경우 쉽게 풀 수 있지만, sequential reasoning이 필요한 경우 필수적인 intermediate step가 생략될 수 있다.

또한 transformer의 layer 수가 input과 상관없이 contant하다는 것도 이유이다. (제한된 expressiveness)

이 때, CoT는 마치 extra layer 처럼 역할을 하여 더 정확한 예측을 하게한다.

실험을 통해 이 2가지 가정을 증명하려 노력했는데, 굉장히 인상적이었다.

그러나 여전히 의문이 든다.

LLM은 결국 few-shots에 있는 intermediate step을 모방한 것이라는 생각이 든다.

> 그렇다면 과연 few-shots과 다른 종류의 problem을 만났을 때 robust한 reasoning 및 정확한 답을 할 수 있을까?

## 📌 CoT의 robustness

역시 이에 대한 생각을 가진 연구가 있었다. [5]

CoT로는 few-shots에 없는 더 어려운 problem을 풀기 어려운 문제점이 있는데, 그 문제를 해결하기 위해 더 어려운 문제를 few-shots에 존재하는 problem으로 더 쪼개버리는 것이다.

마치 복잡한 signal을 sin, cos으로 linear decomposition을 하듯이, 어려운 문제를 몇가지 subquestion으로 쪼개고 sequentially 문제를 해결한다.

## 📌 Marginal probability vs Conditional probability

여기까지 생각을 해봤을 때, 나의 관점에서는 CoT에 더이상 큰 결함이 없어 보였다.

그러나, 이 가설을 듣고 아직 한참 멀었다는 생각을 했는데

기본적으로 바로 우리가 구하고 싶은 것은 Marginal probability = P(Answer | Problem)이지, Conditional probability = P(Intermediate step, Answer | Problem) 이 아니라는 것이다. 따라서 Marginal probability를 구할 수 있는 다양한 가설에 대한 연구가 진행되었다.

다음 포스팅에서 이에 대해 알아보자

## 🗂 _Reference_

[1] _https://arxiv.org/pdf/2201.11903_

[2] _https://dennyzhou.github.io/LLM-Reasoning-Berkeley.pdf_

[3] _https://aclanthology.org/P17-1015.pdf_

[4] _https://openreview.net/pdf?id=3EWTEy9MTM_

[5] _https://arxiv.org/pdf/2205.10625_

```toc

```
