---
title: "Oil Palm Condition Monitoring via UAV Imagery Using YOLOv11 Enhanced for Class Imbalance"
collection: publications
category: conferences
permalink: /publication/_publications/paper-6-oil-palm-condition-monitoring
# excerpt: ''
date: 2025-10-20
venue: '2025 17th International Conference on Information Technology and Electrical Engineering (ICITEE)'
slidesurl: ''
paperurl: 'https://ieeexplore.ieee.org/abstract/document/11338374'
citation: 'Saputra, M. A., Soeparno, H., Arifin, Y., & Budiharto, W. (2025, October). Oil Palm Condition Monitoring via UAV Imagery Using YOLOv11 Enhanced for Class Imbalance. In 2025 17th International Conference on Information Technology and Electrical Engineering (ICITEE) (pp. 1-6). IEEE.'
---

Effective monitoring of oil palm tree conditions is crucial for advancing precision agriculture. Previous studies have primarily focused on detecting and counting oil palm trees, but such approaches are insufficient without the ability to assess tree health. This study proposes a modified YOLOv11 model for oil palm condition detection using the MOPAD dataset, which includes five condition classes. The modification enhances the loss function by introducing class weighting based on data distribution, applying weighted Focal Loss to mitigate the dominance of easy negatives, employing SmoothL1 Loss for more stable bounding box regression, and approximating Distribution Focal Loss (DFL) for distance distribution prediction. Experimental results demonstrate that the proposed model outperforms baseline methods-YOLOv8, Deformable DETR, and standard YOLOv11-achieving superior performance with a precision of 99.80%, recall of 99.47%, and F1-score of 99.64%. Visual analysis of inference outputs further confirms that the modified YOLOv11 delivers more consistent condition detection and closer alignment with ground truth, validating the effectiveness of the loss rebalancing strategy in addressing class imbalance for UAV-based oil palm monitoring.