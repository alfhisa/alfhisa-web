---
title: "Online Gambling Promotion Detection in Indonesian YouTube Comments Using Semi-Supervised IndoBERT Classification"
collection: publications
category: conferences
permalink: /publication/paper-4-online-gambling-comments-classification
# excerpt: ''
date: 2025-07-31
venue: 'The 10th International Conference on Computer Science and Computational Intelligence (ICCSCI)'
slidesurl: ''
paperurl: 'https://www.sciencedirect.com/science/article/pii/S1877050925027358'
citation: 'Santika, S. P., Saputra, M. A., Zahra, A., & Suhartono, D. (2025). Online Gambling Promotion Detection in Indonesian YouTube Comments Using Semi-Supervised IndoBERT Classification. Procedia Computer Science, 269, 1269-1278.'
---

The widespread promotion of online gambling through user-generated content on social media platforms has raised significant concerns, especially in regions with high internet penetration such as Indonesia. This research proposes a classification-based approach to detect online gambling promotional content in Indonesian-language YouTube comments using a semi-supervised learning strategy. A total of 10,101 comments were collected, of which 10% were manually labeled as either Promotion or Non-Promotion. Initial training using only the labeled data employed IndoBERT, a pre-trained language model for Bahasa Indonesia, which achieved an accuracy of 0.953, precision of 0.945, recall of 0.977, and F1-score of 0.961. Although the baseline performance was strong, the IndoBERT model was slightly outperformed by the SVM classifier. To address the limitations of labeled data, pseudo-labeling was applied to the remaining unlabeled data, which was then combined with the labeled subset to retrain the IndoBERT model. The evaluation results showed a significant improvement in classification performance after semi-supervised training, achieving an accuracy of 0.986, precision of 0.991, recall of 0.980, and F1-score of 0.985, surpassing all previously tested models. These findings highlight the effectiveness of IndoBERT in understanding informal online language and the advantage of semi-supervised learning in resource-constrained annotation scenarios.