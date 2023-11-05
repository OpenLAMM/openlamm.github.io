import Link from '@docusaurus/Link';

## Datasets

LAMM supports several datasets (up to **~300k 2D and 90k 3D instruction tuning datasets** and **25 benchmarking datasets**). You can download them and organize them following [here](/tutorial/Datasets/instruction).

<!-- #### Instruction Datasets
|  Data Name  | Source     | Task       | DownLoad Link |  
|  ---------- | ---------  | ---------  | ------------  | 
| daily_dialogue_49k |COCO | 2D VQA     |[LAMM]() |
| detailed_description_49k | COCO | 2D VQA & Caption |instruction tuning | [LAMM]()
| factual_knowledge_dialogue_42k     | Bamboo | 2D VQA | [LAMM]() |
| vision_task_dialogue_46k    | COCO, Bamboo, Locount | 2D Caption & Counting & vqa & classification | [LAMM]() | -->

### Instruction Tuning Datasets

<table className="data-overview-instruction">
  <thead>
    <tr>
      <th>Data Source</th>
      <th>Supported Tasks</th>
      <th>Meta File</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Link to="https://cocodataset.org">MS-COCO</Link></td>
      <td>2D Det. / 2D Cap. / 2D VQA</td>
      <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/daily_dialogue_49k.json">daily_dialogue_49k</Link> / <Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/detailed_description_49k.json">detailed_description_49k</Link> / <Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/vision_task_dialogue_46k.json">vision_task_dialogue_46k</Link> / <Link to="https://opendatalab.com/LAMM/OctaviusDataset/tree/main/OctaviusDataset_2D/meta_file">coco_detection_110k</Link></td>
    </tr>
    <tr>
      <td><Link to="https://github.com/ZhangYuanhan-AI/Bamboo">Bamboo</Link></td>
      <td>2D Det. / 2D Cls. / 2D VQA</td>
      <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/factual_knowledge_dialogue_42k.json">factual_knowledge_dialogue_42k</Link> / <Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/vision_task_dialogue_46k.json">vision_task_dialogue_46k</Link></td>
    </tr>
    <tr>
      <td><Link to="https://isrc.iscas.ac.cn/gitlab/research/locount-dataset">Locount</Link></td>
      <td>2D Counting</td>
      <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/vision_task_dialogue_46k.json">vision_task_dialogue_46k</Link></td>
    </tr>
    <tr>
        <td><Link to="https://textvqa.org">TextVQA</Link></td>
        <td>2D VQA</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Instruct/meta_file/vision_task_dialogue_46k.json">vision_task_dialogue_46k</Link></td>
    </tr>
    <tr>
        <td><Link to="http://www.scan-net.org">ScanNet</Link></td>
        <td>3D Cls. / 3D Cap. / 3D VQA</td>
        <td><Link to="https://opendatalab.com/LAMM/OctaviusDataset/tree/main/OctaviusDataset_3D/3D_Instruct/meta_file">scan2inst_train</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/WaldJohannaU/3RScan">3RScan</Link></td>
        <td>3D VQA / 3D Cap. / 3D Det.</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/3D_Instruct/meta_file/LAMM_3dinstruct_10k.json">LAMM_3dinstruct_10k</Link></td>
    </tr>
    <tr>
        <td><Link to="https://shapenet.org">ShapeNet</Link></td>
        <td>3D Cls.</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/3D_Instruct/meta_file/LAMM_3dinstruct_10k.json">LAMM_3dinstruct_10k</Link></td>
    </tr>
  </tbody>
</table>

### Benchmarking Datasets

<table className="data-overview-instruction">
  <thead>
    <tr>
      <th>Data Source</th>
      <th>Supported Tasks</th>
      <th>Meta File</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Link to="https://shannon.cs.illinois.edu/DenotationGraph/">Flickr30k</Link></td>
      <td>2D Cap.</td>
      <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Caption_flickr30k.json">Caption_flickr30k</Link></td>
    </tr>
    <tr>
      <td><Link to="https://www.cs.toronto.edu/~kriz/cifar.html">CIFAR-10</Link></td>
      <td>2D Cls.</td>
      <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Classification_CIFAR10.json">Classification_CIFAR10</Link> </td>
    </tr>
    <tr>
      <td><Link to="https://github.com/cvlab-stonybrook/LearningToCountEverything">FSC147</Link></td>
      <td>2D Counting / 2D Locating</td>
      <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Counting_FSC147.json">Counting_FSC147</Link></td>
    </tr>
    <tr>
        <td><Link to="https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html">CelebA</Link></td>
        <td>2D Facial Cls.</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Facial_Classification_CelebA(Hair).json">Facial_Classification_CelebA(Hair)</Link> / <Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Facial_Classification_CelebA(Smile).json">Facial_Classification_CelebA(Smile)</Link></td>
    </tr>
    <tr>
        <td><Link to="http://weegee.vision.ucmerced.edu/datasets/landuse.html">UCMerced</Link></td>
        <td>2D Fine-grained Cls. </td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Fine-grained_Classification_UCMerced.json">Fine-grained_Classification_UCMerced</Link></td>
    </tr>
    <tr>
        <td><Link to="https://dbcollection.readthedocs.io/en/latest/datasets/leeds_sports_pose_extended.html">LSP</Link></td>
        <td>2D Kps. Det. / 2D Locating</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Keypoints_Detection_LSP.json">Keypoints_Dectection_LSP</Link> / <Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Locating_LSP.json">Locating_LSP</Link></td>
    </tr>
    <tr>
        <td><Link to="http://host.robots.ox.ac.uk/pascal/VOC/">VOC</Link></td>
        <td>2D Det. / 2D Locating</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Detection_VOC2012.json">Detection_VOC2012</Link> / <Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/Locating_VOC2012.json">Locating_VOC2012</Link></td>
    </tr>
    <tr>
        <td><Link to="https://paperswithcode.com/dataset/svt">SVT</Link></td>
        <td>2D OCR</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/OCR_SVT.json">OCR_SVT</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/allenai/dqa-net">AI2D</Link></td>
        <td>2D VQA</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/VQA_AI2D.json">VQA_AI2D</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/allenai/dqa-net">ScienceQA</Link></td>
        <td>2D VQA / 6 desiderata</td>
        <td><Link to="https://huggingface.co/datasets/openlamm/LAMM_Dataset/blob/main/2D_Benchmark/meta_file/VQA_SQAimage.json">VQA_SQAimage</Link> / <Link to="https://openxlab.org.cn/datasets/LAMM/ChEF/blob/main/ChEF/ScienceQA_C/VQA_ScienceQA_C.json">VQA_ScienceQA_C</Link></td>
    </tr>
    <tr>
        <td><Link to="https://entuedu-my.sharepoint.com/:f:/g/personal/yuanhan002_e_ntu_edu_sg/El2wmbzutJBOlu8Tz9HyDJABMmFtsG_8mq7uGh4Q7F1QSQ?e=NyroDS">Omnibenchmark</Link></td>
        <td>2D Fine-grained Cls.</td>
        <td><Link to="https://openxlab.org.cn/datasets/LAMM/ChEF/blob/main/ChEF/OmniBenchmark_Bamboo/meta_file/Classification_Omnibenchmark.json">Classification_Omnibenchmark</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/open-compass/MMBench">MMBench</Link></td>
        <td>2D VQA / 6 desiderata</td>
        <td><Link to="https://github.com/open-compass/MMBench">MMBench</Link> / <Link to="https://openxlab.org.cn/datasets/LAMM/ChEF/blob/main/ChEF/MMBench_C/MMBench_C.json">MMBench_C</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models">MME</Link></td>
        <td>2D VQA</td>
        <td><Link to="https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models">MME</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/AILab-CVC/SEED-Bench">SEEDBench</Link></td>
        <td>2D VQA</td>
        <td><Link to="https://github.com/AILab-CVC/SEED-Bench">SEEDBench</Link></td>
    </tr>
    <tr>
        <td><Link to="https://github.com/RUCAIBox/POPE">POPE</Link></td>
        <td>2D Hallucination</td>
        <td><Link to="https://github.com/RUCAIBox/POPE">POPE</Link></td>
    </tr>
    <tr>
        <td><Link to="https://referit3d.github.io/">NR3D</Link></td>
        <td>3D Cap.</td>
        <td><Link to="https://opendatalab.com/LAMM/OctaviusDataset/blob/main/OctaviusDataset_3D/3D_Benchmark/meta_file/Caption_nr3d.json">Caption_nr3d</Link></td>
    </tr>
    <tr>
        <td><Link to="https://shapenet.org/">ShapeNet</Link></td>
        <td>3D Cls.</td>
        <td><Link to="https://opendatalab.com/LAMM/OctaviusDataset/blob/main/OctaviusDataset_3D/3D_Benchmark/meta_file/Classification_shapenet.json">Classification_shapenet</Link></td>
    </tr>
    <tr>
        <td><Link to="http://www.scan-net.org">ScanNet</Link></td>
        <td>3D Cap. / 3D Cls. / 3D VQA</td>
        <td><Link to="https://opendatalab.com/LAMM/OctaviusDataset/blob/main/OctaviusDataset_3D/3D_Benchmark/meta_file/Caption_scannet.json">Caption_scannet</Link> / <Link to="https://opendatalab.com/LAMM/OctaviusDataset/blob/main/OctaviusDataset_3D/3D_Benchmark/meta_file/Classification_scannet.json">Classification_scannet</Link> / <Link to="https://opendatalab.com/LAMM/OctaviusDataset/blob/main/OctaviusDataset_3D/3D_Benchmark/meta_file/VQA_scannet.json">VQA_scannet</Link></td>
    </tr>
  </tbody>
</table>