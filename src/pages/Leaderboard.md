---
title: Leaderboard
description: Leaderboard
hide_table_of_contents: false
---

# Leaderboard

## Comparison of Multimodal Large Language Models on 2D computer vision tasks

| Task                  | Dataset       | Metric    | SOTA | LLaVA | MiniGPT4 | mPLUG-owl | LAMM  |
| --------------------- | ------------- | --------- | ---- | ----- | -------- | --------- | ----- |
| Classification        | CIFAR10       | Acc ↑     | 99.5 | **60.83** | 46.22    | 42.5      | 34.5  |
| Detection             | VOC2012       | mAP ↑     | 97.2 | 1.42  | 0.92     | 0.158     | **4.82**  |
| VQA                   | SQAimage      | Acc ↑     | 92.53  N/A | 40.5  18.13 | 43.43  Failed | 36.39  19.31 | **47.15** |
| VQA                   | AI2D          | Acc ↑     | N/A  | 18.13 | Failed   | 19.31     | **19.5**  |
| Image Caption         | flickr30k     | BLEU4 ↑   | 30.1 | **6.65**  | 5.1      | 2.74      | 0.70  |
| F-g classification    | UCMerced      | Acc ↑     | 100  | **47**    | 33.6     | 32.5      | 13    |
| Counting              | FSC147        | MAE ↓     | 10.79 | 56.2  | Failed   | 60.67     | **53.97** |
| OCR                   | SVT           | Word Acc ↑ | 97.9 | **37.78** | 16.97    | 30.39     | 4.2   |
| Facial Classification | CelebA(Smile) | Acc ↑     | N/A  | Failed | **66.36**    | Failed    | 51.3  |
| Facial Classification | CelebA(Hair)  | Acc ↑     | N/A  | **46.42** | 43.47    | 40.93     | 30.48 |
| Keypoints Detection   | LSP           | PCK ↑     | 99.5 | Failed | Failed   | Failed    | Failed|


## Results of LAMM model on selected 2D vision tasks

| Task                | Dataset   | LAMM(Zero-Shot) | LAMM(Finetune) |
| ------------------- | --------- | -------------- | -------------- |
| Classification (Acc)| CIFAR10   | 34.5           | 91.2           |
| Object Detection (Acc)| VOC2012  | 4.82           | 13.48          |
| VQA (mAP@0.5)       | SQAimage  | 47.15          | 74.27          |


## Results of 3D tasks by LAMM

| Task                                | Dataset      | SOTA   | LAMM(Zero-Shot) | LAMM(Finetune) |
| ----------------------------------- | ------------ | ------ | -------------- | -------------- |
| 3D Object Detection (mAP@0.5)       | ScanNet      | 63.2   | 9.3            | 11.89          |
| Visual Grounding (mAP@0.5)          | ScanRefer    | 54.59  | Failed         | 3.38           |
| 3D VQA (Acc of multiple choice problem)| ScanQA     | N/A    | 26.54          | 99.89          |


## Comparison of results of Binary Locating Metric and GPT Metric of existing MLLMs

|                           | LLaVA | MiniGPT4 | mPLUG-owl | LAMM |
| ------------------------- | ----- | -------- | --------- | ---- |
| Binary-Loc Metric         | 14.73 | 13.12    | 4.42      | **31.2** |
| GPT Metric                | 11    | -        | -         | **89**   |
