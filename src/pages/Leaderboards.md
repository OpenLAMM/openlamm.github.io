# Leaderboards

## Visual performance of MLLMs on different Scenarios
For each *Scenario*, we conduct various experiments with diverse *Recipes*, from which, the *Recipe* behaving most reliably (*i.e.* stable to *Instruction* variations) is selected as the default setting to evaluate the visual performance of all MLLMs.


| **Scenario**      | **CIFAR** | **Flickr** | **VOC** | **Omni** | **FSC** | **SQA** | **MM** | **SEED** | **MME** |
|-------------------|--------|--------|-------|-----------|-------|-------|-------|-------|-------|
| **LLaVA**         | **89.40** | 80.80  | 26.01 | 26.62     | 24.11 | 46.55    | 43.13   | 46.45 | 50.17  |
| **LAMM**          | 80.70  | 72.50  | 29.58 | 22.54     | 19.33 | 52.75    | 44.47   | 47.03 | 55.82  |
| **MiniGPT-4**     | 80.80  | 71.50  | 26.51 | 30.60     | 22.52 | 47.0     | 54.34 | 46.48 | 57.12  |
| **mPLUG-owl**     | 79.67  | 79.20  | 28.50 | 30.70     | 20.92 | 48.44    | 49.57   | 42.81 | 71.59 |
| **Otter**         | 81.34  | 71.30  | 27.15 | 26.41     | 20.00 | 50.22    | 53.91   | 36.40 | 63.78  |
| **LlaMA-Adapter2**| 70.17  | 79.50  | 31.60 | **32.00** | 21.26 | 54.34 | 57.06 | 35.41 | 69.90  |
| **InstructBLIP**  | 84.27  | 79.40 | 27.65 | 30.75    | **25.04** | **55.18**    | **65.73**  | **50.81** | **72.0**   |
| **Shikra**        | 68.71  | **94.70**  | **55.23** | 22.89   | 22.43 | 45.21    | 63.26  | 49.79 | 70.28  |
| **Kosmos-2**      | 88.87  | 85.70  | 54.55 | 21.34     | 21.93 | 34.60    | 32.82  | 46.38 | 52.95  |
| **Random Choice** | 10.0   | 25.00  | 25.00 | 10.94     | 20.00 | 35.80    | 27.57  | 24.27 | 50.00  |

*CIFAR denotes CIFAR-10, Flickr denotes Flickr30k, VOC denotes VOC2012, Omni denotes Omnibenchmark, FSC denotes FSC147, SQA denotes ScienceQA, MM denotes MMbench, and SEED denotes Seedbench.

## Results of Desiderata
We employ specialized *Recipes* to assess the six dimensions of desiderata. All the six dimensions of desiderata except language performance and hallucination are evaluated on MMBench and ScienceQA. Language performance is evaluated on 250 samples random retrieved from ScienceQA and MMBench. Following POPE, hallucination is specifically assessed on the MSCOCO dataset.


| **Desiderata**      | **Calibration** | **ICL** | **Ins. Follow.** | **Lang. Perf.** | **Hallucination** | **Robustness** |
|---------------|--------|--------|-------|-----------|-------|-------|
| **LLaVA**         | 90.1     | 15.15       | 44.23 | 84.82             | 50.51       | 63.36         |
| **LAMM**          | 76.36    | 40.17       | 40.01 | 79.08             | 57.42       | 57.98         |
| **MiniGPT-4**     | 84.73    | 36.85       | 43.73 | 76.00             | 71.30       | 60.40         |
| **mPLUG-owl**     | 84.15    | 33.45       | 36.73 | 88.44             | 52.26       | 51.05         |
| **Otter**         | 82.80    | **48.31**       | 38.40 | 74.05             | 54.54       | 57.16         |
| **LlaMA-Adapter2**| 89.61    | 36.52       | 38.76 | **90.85**             | 63.83       | 65.37         |
| **InstructBLIP**  | **91.25**    | 46.14       | **44.59** | 80.01             | **84.81**       | **72.85**         |
| **Shikra**        | 88.35    | 30.21       | 36.21 | 66.67             | 83.78       | 47.91         |
| **Kosmos-2**      | 89.19    | 10.72       | 17.62 | 45.86             | 50.50       | 22.69         |

*ICL denotes In-context learning, Ins. Follow. denotes Instruction Following, and Lang. Perf. denotes Language Performance.

## Evaluation on GPT-4V and Bard
We evaluate GPT-4V(ision) and Bard on MMBench and ScienceQA scenarios, as well as the desiderata including in-context learning, instruction following, hallucination, and robustness. We extract 30 data samples from ScienceQA and MMBench respectively for both scenario evaluations and each of the desideratum evaluation. We compare these two api-only models with three open-source MLLMs (LLaVA, Otter, and MiniGPT4) on the same data samples.


| **MLLM**       | **ScienceQA** | **MMBench** | **ICL**    | **Ins. Follow.** | **Robustness** | **Hallucination** |
|-------------|-----------|---------|--------|--------------|------------|---------------|
| **GPT-4V**  | **96.67** | **93.80**| 43.98| **97.69**    | **82.16**  | **96.00**        |
| **Bard**    | 90.00     | 71.43    | 39.61  | 71.41        | 71.05       | 88.88           |
| **LLaVA**   | 50.00     | 43.33    |**47.99**| 36.67      |  34.18       | 36.67 |
| **Otter**    |  63.33       | 50.00|  47.91   |    44.44         |  37.35        | 80.00 |
| **mPLUG-Owl** |  53.33       |  46.67       |   42.14  |     41.67        |  63.46        | 36.67
*ICL denotes In-context learning, and Ins. Follow. denotes Instruction Following.