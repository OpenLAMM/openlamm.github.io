## LAMM-Models

| #Samples |                                Vision Encoder                                |      LLM       |            Training Data             |                                    Link                                     |
| :------: | :-------------------------------------------------------------------------- | :------------ | :--------------------------------- | :-------------------------------------------------------------------------: |
|   98K    |                                  CLIP-ViT-L                                  |  Vicuna_v0_7B  | LAMM-2D daily dialogue & desctiption |  [ckpt](https://huggingface.co/openlamm/lamm_7b_lora32_98k)      |
|   186K   |                                  CLIP-ViT-L                                  |  Vicuna_v0_7B  |       LAMM-2D Instruction Data       | [ckpt](https://huggingface.co/openlamm/lamm_7b_lora32_186k)      |
|   186K   |                                  CLIP-ViT-L                                  | LLaMA2_chat_7B |       LAMM-2D Instruction Data       | [ckpt](https://huggingface.co/openlamm/lamm186k_llama2chat7b_lora32) |
|   98K    |                                  CLIP-ViT-L                                  | Vicuna_v0_13B  | LAMM-2D daily dialogue & desctiption |  [ckpt](https://huggingface.co/openlamm/lamm_13b_lora32_98k)      |
|   186K   |                                  CLIP-ViT-L                                  | Vicuna_v0_13B  |       LAMM-2D Instruction Data       |  [ckpt](https://huggingface.co/openlamm/lamm_13b_lora_186k)      |
|   10K    | [EPCL-ViT-L](https://huggingface.co/openlamm/epcl_vit-L_256tokens/tree/main) | Vicuna_v0_13B  |       LAMM-3D Instruction Data       | [ckpt](https://huggingface.co/openlamm/lamm3d_13b_lora32_10k)     |

## Octavius-Models

| #Samples |                                Vision Encoder                                |      LLM       |            Training Data             |                                    Link                                     |
| :------: | :-------------------------------------------------------------------------- | :------------ | :--------------------------------- | :-------------------------------------------------------------------------: |
|   286k    |                                  CLIP-ViT-L                                  |  Vicuna_v0_13B  | LAMM-2D Instruction Data & COCO-Detection |  [ckpt](https://huggingface.co/openlamm/octavius/blob/main/octavius_2d_e4_bs64.pt)      |
|   90k   |                                 Obj-As-Scene                                 |  Vicuna_v0_13B  |       Scan2Inst       |  [ckpt](https://huggingface.co/openlamm/octavius/blob/main/octavius_3d_e3_bs64.pt)      |
|   376K   |                                  CLIP-ViT-L & <br/> Obj-As-Scene                   | LLaMA2_chat_13B |       LAMM-2D Instruction Data & COCO-Detection & <br/> Scan2Inst       |  [ckpt](https://huggingface.co/openlamm/octavius/blob/main/octavius_2d%2B3d_e6_bs64.pt) |
