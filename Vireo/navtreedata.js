var NAVTREE =
[
  [ "Vireo", "index.html", [
    [ "About", "about.html", null ],
    [ "Getting Started", "getting_started.html", [
      [ "Building Vireo", "gs_010_build.html", null ],
      [ "\"Hello Triangle\" tutorial", "gs_020_tutorial_1.html", [
        [ "Development environment", "tutorial_1_01_devenv.html", null ],
        [ "Setting up the project", "tutorial_1_02_project.html", null ],
        [ "The Vireo class", "tutorial_1_03_vireo_class.html", null ],
        [ "The submission queue", "tutorial_1_04_queues.html", null ],
        [ "The swap chain", "tutorial_1_05_swapchain.html", null ],
        [ "Commands allocators and command lists", "tutorial_1_06_commands.html", null ],
        [ "Render pass", "tutorial_1_07_renderpass.html", null ],
        [ "Viewports and scissors", "tutorial_1_08_viewport.html", null ],
        [ "Vertex data", "tutorial_1_09_vertex_data.html", null ],
        [ "The graphic pipeline", "tutorial_1_10_pipeline.html", null ],
        [ "Shader modules", "tutorial_1_11_shaders.html", null ],
        [ "Pipeline creation", "tutorial_1_12_pipeline_config.html", null ],
        [ "Drawing", "tutorial_1_13_drawing.html", null ],
        [ "What\'s next?", "tutorial_1_14_conclusion.html", null ]
      ] ]
    ] ],
    [ "Manual", "manual.html", [
      [ "The Vireo class", "manual_010_vireo_class.html", null ],
      [ "Backend instances, physical devices and logical devices", "manual_020_devices.html", null ],
      [ "Resources", "manual_030_00_resources.html", [
        [ "Memory buffers", "manual_030_01_resources.html", null ],
        [ "Images", "manual_030_02_resources.html", null ],
        [ "Image samplers", "manual_030_03_resources.html", null ]
      ] ],
      [ "Resources Descriptors", "manual_040_00_descriptors.html", [
        [ "Descriptor Layout", "manual_040_01_descriptor_layout.html", null ],
        [ "Descriptor Set", "manual_040_02_descriptor_set.html", null ],
        [ "Push constants", "manual_040_03_push_constants.html", null ],
        [ "Pipeline Resources", "manual_040_04_pipeline_resources.html", null ]
      ] ],
      [ "Command Lists", "manual_050_00_commands.html", null ],
      [ "Submission queues", "manual_060_00_queues.html", null ],
      [ "Shaders", "manual_070_00_shaders.html", null ],
      [ "Pipelines", "manual_080_00_pipelines.html", [
        [ "Graphics Pipelines", "manual_080_01_graphic_pipelines.html", null ],
        [ "Compute Pipelines", "manual_080_02_compute_pipelines.html", null ]
      ] ],
      [ "Synchronization", "manual_090_00_synchronization.html", [
        [ "Fences", "manual_090_01_fences.html", null ],
        [ "Semaphores", "manual_090_02_semaphores.html", null ],
        [ "Memory barriers", "manual_090_03_barriers.html", null ]
      ] ],
      [ "Render pass", "manual_100_00_renderpass.html", null ],
      [ "Swap Chains", "manual_110_00_swapchain.html", null ],
      [ "Viewports and scissors", "manual_120_00_viewports.html", null ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", [
        [ "vireo", "namespacevireo.html", [
          [ "Buffer", "classvireo_1_1Buffer.html", [
            [ "~Buffer", "classvireo_1_1Buffer.html#ae3ba8d0f052d31954b11702206f9b23c", null ],
            [ "Buffer", "classvireo_1_1Buffer.html#acdebf436ed3dd1d97d2eb9fa1df400d6", null ],
            [ "getInstanceCount", "classvireo_1_1Buffer.html#a52d7b79d707b2535952cb263ce9bbbe5", null ],
            [ "getInstanceSize", "classvireo_1_1Buffer.html#a2a0c94e27b7fe4f968d16e44711f8383", null ],
            [ "getInstanceSizeAligned", "classvireo_1_1Buffer.html#a4733e816d7c9350929e2d24ef660e324", null ],
            [ "getMappedAddress", "classvireo_1_1Buffer.html#ad8bebf5aa656b037de89b9c8636f232b", null ],
            [ "getSize", "classvireo_1_1Buffer.html#a5c1d89d2d5cd83b98e9053def9afdc99", null ],
            [ "getType", "classvireo_1_1Buffer.html#ad210334d8ff0b83b000130dfcaac2faf", null ],
            [ "map", "classvireo_1_1Buffer.html#ab787505118207f731de3eed5a7c1d7c9", null ],
            [ "unmap", "classvireo_1_1Buffer.html#ab6614885bbf62415cd62371d7d94b301", null ],
            [ "write", "classvireo_1_1Buffer.html#a43210bfeb974e1020ee27b98bf14cd0f", null ],
            [ "bufferSize", "classvireo_1_1Buffer.html#a7be887a2ca0a258cf6b368d32fd87487", null ],
            [ "instanceCount", "classvireo_1_1Buffer.html#a03769e76e974fc0a517627ea030c81f9", null ],
            [ "instanceSize", "classvireo_1_1Buffer.html#af34c811ab25184584ba84d327ce867fc", null ],
            [ "instanceSizeAligned", "classvireo_1_1Buffer.html#a5ac6cf5a5123e40167383798584f10ad", null ],
            [ "mappedAddress", "classvireo_1_1Buffer.html#a7f58980a2c86325f5bf167aa84ead492", null ],
            [ "WHOLE_SIZE", "classvireo_1_1Buffer.html#a8ece8a4ec9f37e2f57460b4e04d96b71", null ]
          ] ],
          [ "BufferUploadInfo", "structvireo_1_1BufferUploadInfo.html", [
            [ "buffer", "structvireo_1_1BufferUploadInfo.html#a87c78df1d374992d86709fbf2106be27", null ],
            [ "data", "structvireo_1_1BufferUploadInfo.html#a0d49d74db4c035719c3867723cf7e779", null ]
          ] ],
          [ "ClearValue", "unionvireo_1_1ClearValue.html", [
            [ "color", "unionvireo_1_1ClearValue.html#a111ac8b82a0ae90d45d22ed6cac83824", null ],
            [ "depthStencil", "unionvireo_1_1ClearValue.html#a726a4f29b4e589b659b61594ba5a0de9", null ]
          ] ],
          [ "ColorBlendDesc", "structvireo_1_1ColorBlendDesc.html", [
            [ "alphaBlendOp", "structvireo_1_1ColorBlendDesc.html#ade7d5565bc1888912285defa073e35e9", null ],
            [ "blendEnable", "structvireo_1_1ColorBlendDesc.html#af69e3282d64f8cfe88a2759960788417", null ],
            [ "colorBlendOp", "structvireo_1_1ColorBlendDesc.html#aee608494528d2ecdfd6cb698c9af21a6", null ],
            [ "colorWriteMask", "structvireo_1_1ColorBlendDesc.html#aceaf767ff5ba26d5df6a66fb4969bcc6", null ],
            [ "dstAlphaBlendFactor", "structvireo_1_1ColorBlendDesc.html#ad4a19e6f7c4ddd59f4cf51a7bbf3da52", null ],
            [ "dstColorBlendFactor", "structvireo_1_1ColorBlendDesc.html#a4c7705f140d6c299cf1465a86b2107db", null ],
            [ "srcAlphaBlendFactor", "structvireo_1_1ColorBlendDesc.html#a54e5195feebb7656631acce141ac1b63", null ],
            [ "srcColorBlendFactor", "structvireo_1_1ColorBlendDesc.html#a22125388a040e897f194544d63a87766", null ]
          ] ],
          [ "CommandAllocator", "classvireo_1_1CommandAllocator.html", [
            [ "~CommandAllocator", "classvireo_1_1CommandAllocator.html#af5455bf1adf536b2e021ef5d9d143db5", null ],
            [ "CommandAllocator", "classvireo_1_1CommandAllocator.html#a6da945bd6f093b23cc2fc569588fff7a", null ],
            [ "createCommandList", "classvireo_1_1CommandAllocator.html#ac16a2d577cbe040ddb146be53b8fa63a", null ],
            [ "createCommandList", "classvireo_1_1CommandAllocator.html#a7f97d15dc39f8f3dec75c54584e15750", null ],
            [ "getCommandListType", "classvireo_1_1CommandAllocator.html#ac9801a52fd19207a55590b30d3803f48", null ],
            [ "reset", "classvireo_1_1CommandAllocator.html#aeb83a854bf8d34bf39c12aad1fb726f8", null ]
          ] ],
          [ "CommandList", "classvireo_1_1CommandList.html", [
            [ "~CommandList", "classvireo_1_1CommandList.html#ad955b9c8fe3bac1aab6bdc8e9c8e4c16", null ],
            [ "CommandList", "classvireo_1_1CommandList.html#abfe584ee02cc3879de28d0ec3b25afd4", null ],
            [ "barrier", "classvireo_1_1CommandList.html#aa97d0ab80ed8a2d96e328ba6c70fa05f", null ],
            [ "barrier", "classvireo_1_1CommandList.html#a198f5b50e5a059e163612fb368a92763", null ],
            [ "barrier", "classvireo_1_1CommandList.html#ac790194dca54214baaa5a91093468a9c", null ],
            [ "barrier", "classvireo_1_1CommandList.html#a4dd9c3812bc98b2eb1604993721f9816", null ],
            [ "begin", "classvireo_1_1CommandList.html#a9d8433d072337e25242ff5d22773ab26", null ],
            [ "beginRendering", "classvireo_1_1CommandList.html#a6ba4e02576315caa1e88649a7fe3cc14", null ],
            [ "bindDescriptor", "classvireo_1_1CommandList.html#a9f0bb4e5280d68557369060929afd9b4", null ],
            [ "bindDescriptor", "classvireo_1_1CommandList.html#a56cf527b2819403921b5b1a140dc17e8", null ],
            [ "bindDescriptors", "classvireo_1_1CommandList.html#a927ccc827fe18c02308e6f375ce333cd", null ],
            [ "bindIndexBuffer", "classvireo_1_1CommandList.html#acdee7d7982fe1ac42e35a76512ed6ccc", null ],
            [ "bindPipeline", "classvireo_1_1CommandList.html#abbd023f91a01aa79503c043079efe472", null ],
            [ "bindVertexBuffer", "classvireo_1_1CommandList.html#a0f3dd16f20f1b53955e945eb9902be66", null ],
            [ "bindVertexBuffers", "classvireo_1_1CommandList.html#aa4dcfdc4d3b6a44813d95585da2af5a6", null ],
            [ "cleanup", "classvireo_1_1CommandList.html#acbb28cf8bdd606e0131fc72218504abc", null ],
            [ "copy", "classvireo_1_1CommandList.html#a511d733515949ebe3f3f6405b059ad0a", null ],
            [ "copy", "classvireo_1_1CommandList.html#a61bf6fe693baf625d5596310bd50f0f5", null ],
            [ "copy", "classvireo_1_1CommandList.html#af4f8de683908fa9b59fd289b06c2651d", null ],
            [ "copy", "classvireo_1_1CommandList.html#ae747aaaebbf76235a11c8d22ee3fac0f", null ],
            [ "copy", "classvireo_1_1CommandList.html#a569b56acb8adf2e9a1db6546cdb4b4b0", null ],
            [ "dispatch", "classvireo_1_1CommandList.html#ac9ccb188621db6fe1fbf5a0be92af3a2", null ],
            [ "draw", "classvireo_1_1CommandList.html#adbf42c05f74289eb98698b991098a9d6", null ],
            [ "drawIndexed", "classvireo_1_1CommandList.html#aebe6ecf3de6f810b09a9d80dc38bbd8d", null ],
            [ "end", "classvireo_1_1CommandList.html#aea5bef9f8eaa5046c3c3104b35a712d4", null ],
            [ "endRendering", "classvireo_1_1CommandList.html#a3ce769f37a91b6136e8821ab84810d3b", null ],
            [ "pushConstants", "classvireo_1_1CommandList.html#a544932598c54739d02736fea07d89d5f", null ],
            [ "setDescriptors", "classvireo_1_1CommandList.html#a6743371309983fb47ab75affc850d88f", null ],
            [ "setScissors", "classvireo_1_1CommandList.html#a6a24283dc6a5be9a4e1c60381eee1adf", null ],
            [ "setScissors", "classvireo_1_1CommandList.html#a6dc62d9eb2c40c567601533cb5e6027b", null ],
            [ "setStencilReference", "classvireo_1_1CommandList.html#a0798bbed3923ec01a5a2f88da5107417", null ],
            [ "setViewport", "classvireo_1_1CommandList.html#a911187b21e2b76ebe840875e2c30643d", null ],
            [ "setViewports", "classvireo_1_1CommandList.html#abaaf97a16cf11298ed05a56f930e0f55", null ],
            [ "upload", "classvireo_1_1CommandList.html#a814ae10770e0a9ac5f5c1102c41a29d8", null ],
            [ "upload", "classvireo_1_1CommandList.html#ac7b5cc27394ed746af6af44b761b218a", null ],
            [ "upload", "classvireo_1_1CommandList.html#aa95f37f5723a600fdde166834ef4b20a", null ],
            [ "upload", "classvireo_1_1CommandList.html#a376d70280f7cbe0a7432c9b11f60e6fb", null ],
            [ "uploadArray", "classvireo_1_1CommandList.html#a766f76733030bb94e154e8b5e7354a50", null ],
            [ "indexTypeSize", "classvireo_1_1CommandList.html#aecfa7ae0f4f995fe416b9d2fb32a3963", null ]
          ] ],
          [ "ComputePipeline", "classvireo_1_1ComputePipeline.html", [
            [ "ComputePipeline", "classvireo_1_1ComputePipeline.html#ac32696618956b24403c1c3263bef8836", null ]
          ] ],
          [ "DepthClearValue", "structvireo_1_1DepthClearValue.html", [
            [ "depth", "structvireo_1_1DepthClearValue.html#a845896541a0621f5fbd11f0d115ce463", null ],
            [ "stencil", "structvireo_1_1DepthClearValue.html#a03320dee3d061381165625247fc75260", null ]
          ] ],
          [ "DescriptorLayout", "classvireo_1_1DescriptorLayout.html", [
            [ "~DescriptorLayout", "classvireo_1_1DescriptorLayout.html#aae29c2bb65f4a5d5b1cf5c13b284a3bf", null ],
            [ "DescriptorLayout", "classvireo_1_1DescriptorLayout.html#aa4fb35979a9223aaf9cf5cf049ec0368", null ],
            [ "add", "classvireo_1_1DescriptorLayout.html#af69e6672ce8e9ad0be1b2c10fddf2f00", null ],
            [ "build", "classvireo_1_1DescriptorLayout.html#a9d887f6f043a4b7c3388ca7aba0b070c", null ],
            [ "getCapacity", "classvireo_1_1DescriptorLayout.html#a62cd3e9eb1bd3a97366e20bfb4ddf884", null ],
            [ "isDynamicUniform", "classvireo_1_1DescriptorLayout.html#a38f1988f4985c4b56237394ec3edff7c", null ],
            [ "isSamplers", "classvireo_1_1DescriptorLayout.html#a8f630189b3863a5665b09ca0d24fcc12", null ],
            [ "capacity", "classvireo_1_1DescriptorLayout.html#ad721fc6ca6a3d6ba3bc506576622aab0", null ],
            [ "dynamic", "classvireo_1_1DescriptorLayout.html#a8fcad9320dc8957d766ebf5a5293450e", null ],
            [ "samplers", "classvireo_1_1DescriptorLayout.html#a8dbf2e26bf6ee6c103af0449a03a60e1", null ]
          ] ],
          [ "DescriptorSet", "classvireo_1_1DescriptorSet.html", [
            [ "~DescriptorSet", "classvireo_1_1DescriptorSet.html#a024145a9c45328f376fcff5fa116fc1d", null ],
            [ "DescriptorSet", "classvireo_1_1DescriptorSet.html#a070d34eab9631814c8c2ce30f2d41e70", null ],
            [ "getLayout", "classvireo_1_1DescriptorSet.html#a0b8db00a5c7d65da0e961934cb653ff3", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a3fe674ff846ee1ec5e33f6c0bc60fa06", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#ac6b994b467a40c6658747566e8998a71", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#ab0eca68d089c03adc462f69ce8ead72e", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a7eefdb4264e554a246caa109d18a4323", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#aacc82b49c2dd66d318bd9b6101a27aa1", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a8e7d81df13d8240f37ec4dcbe7946f2e", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a465263410a725b829d3c2bcecf400090", null ],
            [ "layout", "classvireo_1_1DescriptorSet.html#a00c9bb91daa3996bf09a781e96306b9c", null ]
          ] ],
          [ "Device", "classvireo_1_1Device.html", [
            [ "~Device", "classvireo_1_1Device.html#ac31b8af5d051873b0b54428958e6e1b1", null ],
            [ "Device", "classvireo_1_1Device.html#a43701d9a19f5bd389b1bd01b74acaf4d", null ]
          ] ],
          [ "Exception", "classvireo_1_1Exception.html", [
            [ "Exception", "classvireo_1_1Exception.html#ad951c450f749673d3b967230f126f205", null ],
            [ "what", "classvireo_1_1Exception.html#aac1c33909e01e1dfc85617cf2477d3eb", null ]
          ] ],
          [ "Extent", "structvireo_1_1Extent.html", [
            [ "height", "structvireo_1_1Extent.html#a6ad4f820ce4e75cda0686fcaad5168be", null ],
            [ "width", "structvireo_1_1Extent.html#a325272ddd9a962f05deb905101d25cbd", null ]
          ] ],
          [ "Fence", "classvireo_1_1Fence.html", [
            [ "~Fence", "classvireo_1_1Fence.html#ad483fcfa3ed727b70f5e04aff693ca82", null ],
            [ "reset", "classvireo_1_1Fence.html#ac550a25f166cbf1dac22720d0a2f225f", null ],
            [ "wait", "classvireo_1_1Fence.html#a157832a0d33c952c805ad84104e2233f", null ]
          ] ],
          [ "GraphicPipeline", "classvireo_1_1GraphicPipeline.html", [
            [ "GraphicPipeline", "classvireo_1_1GraphicPipeline.html#aee79fb6e46ad319d50a33f5b6a36f098", null ]
          ] ],
          [ "GraphicPipelineConfiguration", "structvireo_1_1GraphicPipelineConfiguration.html", [
            [ "alphaToCoverageEnable", "structvireo_1_1GraphicPipelineConfiguration.html#ace0672cdd09f7c7c47d807dbaa1fcfd4", null ],
            [ "backStencilOpState", "structvireo_1_1GraphicPipelineConfiguration.html#a59b235a6b16f59d681662eb6d0eef83d", null ],
            [ "colorBlendDesc", "structvireo_1_1GraphicPipelineConfiguration.html#af08a69b7484856800ef50e898d63e89a", null ],
            [ "colorRenderFormats", "structvireo_1_1GraphicPipelineConfiguration.html#acbebde515c7f13e1dbe018ff1a6bd1f8", null ],
            [ "cullMode", "structvireo_1_1GraphicPipelineConfiguration.html#a1a148f03cb706e1df2d5da7c157a3dee", null ],
            [ "depthBiasClamp", "structvireo_1_1GraphicPipelineConfiguration.html#adb2fb4e9b381d418954f7913ba6bbc91", null ],
            [ "depthBiasConstantFactor", "structvireo_1_1GraphicPipelineConfiguration.html#a707e84839357d6fccd340c8bc62eda85", null ],
            [ "depthBiasEnable", "structvireo_1_1GraphicPipelineConfiguration.html#aa521be8e92f296956a1ac3ada4f29399", null ],
            [ "depthBiasSlopeFactor", "structvireo_1_1GraphicPipelineConfiguration.html#a2aaafa081f8918bcd435a82d974ef512", null ],
            [ "depthCompareOp", "structvireo_1_1GraphicPipelineConfiguration.html#a5dd38ab71aff7188d4f5b430be25c9f2", null ],
            [ "depthStencilImageFormat", "structvireo_1_1GraphicPipelineConfiguration.html#abe7df22d322b849c162edc4a3d34edc4", null ],
            [ "depthTestEnable", "structvireo_1_1GraphicPipelineConfiguration.html#aab0646082c17e18ccff3c9992c91a28a", null ],
            [ "depthWriteEnable", "structvireo_1_1GraphicPipelineConfiguration.html#a1944b0918378af218375dd45c1f191d1", null ],
            [ "domainShader", "structvireo_1_1GraphicPipelineConfiguration.html#a6b731b5d9a10abb21fdf63419fe277a9", null ],
            [ "fragmentShader", "structvireo_1_1GraphicPipelineConfiguration.html#a6b616984a63a0cca82ff022791a6af4d", null ],
            [ "frontFaceCounterClockwise", "structvireo_1_1GraphicPipelineConfiguration.html#ab524e7956d02467cd5f3e2c5c415ea6f", null ],
            [ "frontStencilOpState", "structvireo_1_1GraphicPipelineConfiguration.html#a1b45dd5b84c41e5322d45980f1f572fe", null ],
            [ "geometryShader", "structvireo_1_1GraphicPipelineConfiguration.html#a33d5e31407844807acbf4ae130e4777a", null ],
            [ "hullShader", "structvireo_1_1GraphicPipelineConfiguration.html#a463da531c8d3aaf573f321834b15ec2c", null ],
            [ "logicOp", "structvireo_1_1GraphicPipelineConfiguration.html#af86718b49f9733acbd8041fa48796e05", null ],
            [ "logicOpEnable", "structvireo_1_1GraphicPipelineConfiguration.html#a659310043f298c09243889f6a1e0701a", null ],
            [ "msaa", "structvireo_1_1GraphicPipelineConfiguration.html#a58daf641d993a02e7806fe8b763fad6c", null ],
            [ "polygonMode", "structvireo_1_1GraphicPipelineConfiguration.html#ac3254846f8dc0547996c86a20205778e", null ],
            [ "primitiveTopology", "structvireo_1_1GraphicPipelineConfiguration.html#a9425f16e57566d759c476b29a959e18a", null ],
            [ "resources", "structvireo_1_1GraphicPipelineConfiguration.html#a0a778d1f35890bd62d1b54212bf0fc46", null ],
            [ "stencilTestEnable", "structvireo_1_1GraphicPipelineConfiguration.html#a0c612171960a136d461b35fc35e85020", null ],
            [ "vertexInputLayout", "structvireo_1_1GraphicPipelineConfiguration.html#a6281a90a5be8bff2d6afadd355c97cff", null ],
            [ "vertexShader", "structvireo_1_1GraphicPipelineConfiguration.html#a67602ccceac0004976673c395daca90d", null ]
          ] ],
          [ "Image", "classvireo_1_1Image.html", [
            [ "~Image", "classvireo_1_1Image.html#a428c4eac8ad01b4c51416ad6d8392f3b", null ],
            [ "Image", "classvireo_1_1Image.html#a1498bf4731472241234dcdb11346ec96", null ],
            [ "getAlignedImageSize", "classvireo_1_1Image.html#a2d1c8f055b20cb7c378e033c88b884f3", null ],
            [ "getAlignedRowPitch", "classvireo_1_1Image.html#a3ac4994eec60364c5495c6a57bb99d84", null ],
            [ "getArraySize", "classvireo_1_1Image.html#a3205b6093998c9d6e95797b9945d9f12", null ],
            [ "getFormat", "classvireo_1_1Image.html#afc623d05f6456686004dbcb40ca7c8eb", null ],
            [ "getHeight", "classvireo_1_1Image.html#afb671e8ff01febf709d9074687f2bfb4", null ],
            [ "getImageSize", "classvireo_1_1Image.html#a894a747cb095beeff44f56cec6fc8642", null ],
            [ "getMipLevels", "classvireo_1_1Image.html#a478d4753c0a41af74ce533f34dde9aab", null ],
            [ "getPixelSize", "classvireo_1_1Image.html#a0fc7b7de771482442d779aaa8b909ade", null ],
            [ "getRowPitch", "classvireo_1_1Image.html#ab0a945918a96ee4ad9d08a98bc8a60f9", null ],
            [ "getWidth", "classvireo_1_1Image.html#a0af04d5df99f552fc7a05a4bf7f5c4e9", null ],
            [ "isReadWrite", "classvireo_1_1Image.html#a155411af8144a14654748c1c95e5b676", null ],
            [ "pixelSize", "classvireo_1_1Image.html#a8207d073132308fdaf5cf16fcf0ec3b1", null ]
          ] ],
          [ "ImageUploadInfo", "structvireo_1_1ImageUploadInfo.html", [
            [ "data", "structvireo_1_1ImageUploadInfo.html#a0d49d74db4c035719c3867723cf7e779", null ],
            [ "image", "structvireo_1_1ImageUploadInfo.html#aa587190f7c4a08481891a467f21da54e", null ]
          ] ],
          [ "Instance", "classvireo_1_1Instance.html", [
            [ "~Instance", "classvireo_1_1Instance.html#a1c72925d928401fa70069b8c25f20987", null ],
            [ "Instance", "classvireo_1_1Instance.html#afeb5cdce7e289265cc8cdf11eced5be5", null ]
          ] ],
          [ "PhysicalDevice", "classvireo_1_1PhysicalDevice.html", [
            [ "~PhysicalDevice", "classvireo_1_1PhysicalDevice.html#a94345c3a92a173f42c5b61fcc7240d80", null ],
            [ "PhysicalDevice", "classvireo_1_1PhysicalDevice.html#a0b6f457287ae397513ea5deb7d5bc431", null ],
            [ "getDescription", "classvireo_1_1PhysicalDevice.html#a6cc9a81a5bb21326ba6504b0bf763e8d", null ]
          ] ],
          [ "PhysicalDeviceDesc", "structvireo_1_1PhysicalDeviceDesc.html", [
            [ "dedicatedSystemMemory", "structvireo_1_1PhysicalDeviceDesc.html#aa4525c3a2179173ab02607893b2eef18", null ],
            [ "dedicatedVideoMemory", "structvireo_1_1PhysicalDeviceDesc.html#af3e29e8dcfd49aff66a644ebb62201f8", null ],
            [ "name", "structvireo_1_1PhysicalDeviceDesc.html#a5d7bb9e3cf7ed264c304170a076aee63", null ],
            [ "sharedSystemMemory", "structvireo_1_1PhysicalDeviceDesc.html#ae788205bed0bd7950f543edd7f9992a6", null ]
          ] ],
          [ "Pipeline", "classvireo_1_1Pipeline.html", [
            [ "~Pipeline", "classvireo_1_1Pipeline.html#ad16ff9c09ba217ca742ef1881af150dd", null ],
            [ "Pipeline", "classvireo_1_1Pipeline.html#aff6cc225ab6af6ea88a83fa212fd9d2d", null ],
            [ "getResources", "classvireo_1_1Pipeline.html#aad6088df25a67c063da0e75b060e87e5", null ],
            [ "getType", "classvireo_1_1Pipeline.html#ad210334d8ff0b83b000130dfcaac2faf", null ]
          ] ],
          [ "PipelineResources", "classvireo_1_1PipelineResources.html", [
            [ "~PipelineResources", "classvireo_1_1PipelineResources.html#ac474f8c0391c5815733789d982e91efd", null ],
            [ "PipelineResources", "classvireo_1_1PipelineResources.html#ac1b6cfc7b45fe8841cee5f9d5483ee84", null ]
          ] ],
          [ "PushConstantsDesc", "structvireo_1_1PushConstantsDesc.html", [
            [ "offset", "structvireo_1_1PushConstantsDesc.html#a894bdfa2d603d8343f8ef01dda6fcd23", null ],
            [ "size", "structvireo_1_1PushConstantsDesc.html#ab2c6b258f02add8fdf4cfc7c371dd772", null ],
            [ "stage", "structvireo_1_1PushConstantsDesc.html#a89f1106f50b4fa72a8b415fc9fd75f8c", null ]
          ] ],
          [ "Rect", "structvireo_1_1Rect.html", [
            [ "height", "structvireo_1_1Rect.html#a6ad4f820ce4e75cda0686fcaad5168be", null ],
            [ "width", "structvireo_1_1Rect.html#a325272ddd9a962f05deb905101d25cbd", null ],
            [ "x", "structvireo_1_1Rect.html#af6d3062751bd565decb1a2cd3b63bdb2", null ],
            [ "y", "structvireo_1_1Rect.html#af64066d134a77e01b3d6eb8da813627a", null ]
          ] ],
          [ "RenderTarget", "classvireo_1_1RenderTarget.html", [
            [ "~RenderTarget", "classvireo_1_1RenderTarget.html#a675f87aedb645ebd1837900ca50823a3", null ],
            [ "RenderTarget", "classvireo_1_1RenderTarget.html#a61504567d4eb89800c3907ed84a5b1a4", null ],
            [ "getImage", "classvireo_1_1RenderTarget.html#a36d6c9dadaea9974284955a0345c83a2", null ],
            [ "getType", "classvireo_1_1RenderTarget.html#ad210334d8ff0b83b000130dfcaac2faf", null ]
          ] ],
          [ "RenderTargetDesc", "structvireo_1_1RenderTargetDesc.html", [
            [ "clear", "structvireo_1_1RenderTargetDesc.html#a635d456eef4e390c55ba64dd43cd4978", null ],
            [ "clearValue", "structvireo_1_1RenderTargetDesc.html#abc7d6ad1f38312ad6e720457c8ad6f8e", null ],
            [ "discardAfterRender", "structvireo_1_1RenderTargetDesc.html#a50fa398fd6ecf9b53c3ea8902945ae5a", null ],
            [ "multisampledRenderTarget", "structvireo_1_1RenderTargetDesc.html#a24d2413398abbded6057b3e1c836a132", null ],
            [ "renderTarget", "structvireo_1_1RenderTargetDesc.html#a6a07cad16886b33023afd9ab74c7ec7a", null ],
            [ "swapChain", "structvireo_1_1RenderTargetDesc.html#aadc2748b6bb50a089d2c870c2c71796e", null ]
          ] ],
          [ "RenderingConfiguration", "structvireo_1_1RenderingConfiguration.html", [
            [ "clearDepthStencil", "structvireo_1_1RenderingConfiguration.html#a8135f039ffa606d40e81363acd9bfa79", null ],
            [ "colorRenderTargets", "structvireo_1_1RenderingConfiguration.html#a60af06c66f595faef2b4489eb7fdb91a", null ],
            [ "depthStencilClearValue", "structvireo_1_1RenderingConfiguration.html#a3b7213db0823f8ccf720c42a2af3ad5d", null ],
            [ "depthStencilRenderTarget", "structvireo_1_1RenderingConfiguration.html#a0a70c5f97a298fe1e5f575d3e588514a", null ],
            [ "depthTestEnable", "structvireo_1_1RenderingConfiguration.html#aab0646082c17e18ccff3c9992c91a28a", null ],
            [ "discardDepthStencilAfterRender", "structvireo_1_1RenderingConfiguration.html#aa45d38bb9a6486002e9b6e71a6aa32d6", null ],
            [ "multisampledDepthStencilRenderTarget", "structvireo_1_1RenderingConfiguration.html#a6155c0c1edaf3c54d0978cdd64347299", null ],
            [ "stencilTestEnable", "structvireo_1_1RenderingConfiguration.html#a0c612171960a136d461b35fc35e85020", null ]
          ] ],
          [ "Sampler", "classvireo_1_1Sampler.html", [
            [ "~Sampler", "classvireo_1_1Sampler.html#a1103de75ddac206561c326452ae3bf56", null ],
            [ "Sampler", "classvireo_1_1Sampler.html#a504edf3c2535a80ad21e39bcca752abe", null ],
            [ "LOD_CLAMP_NONE", "classvireo_1_1Sampler.html#aa0d3e96061c1d4a80882d9a36c6193c8", null ]
          ] ],
          [ "Semaphore", "classvireo_1_1Semaphore.html", [
            [ "Semaphore", "classvireo_1_1Semaphore.html#a4b702fb86b21d426f67dfb288e9ebb0c", null ],
            [ "~Semaphore", "classvireo_1_1Semaphore.html#a542ed9262c4c60d435711271d1d33a13", null ],
            [ "decrementValue", "classvireo_1_1Semaphore.html#ac652823473f741abc1e6eb12b72552d9", null ],
            [ "getType", "classvireo_1_1Semaphore.html#ad210334d8ff0b83b000130dfcaac2faf", null ],
            [ "getValue", "classvireo_1_1Semaphore.html#a749e335c2e7699637beac1d19bc6ac0a", null ],
            [ "incrementValue", "classvireo_1_1Semaphore.html#afa6200d893b177d976ea38086fcc692d", null ],
            [ "setValue", "classvireo_1_1Semaphore.html#a772423f5807d5a30b60c9284206e61ff", null ],
            [ "type", "classvireo_1_1Semaphore.html#a2f872a77de13dbcc2e58c7d61e015d9b", null ],
            [ "value", "classvireo_1_1Semaphore.html#a4e630859cc0e2a22bd6acf39a6a8e218", null ]
          ] ],
          [ "ShaderModule", "classvireo_1_1ShaderModule.html", [
            [ "~ShaderModule", "classvireo_1_1ShaderModule.html#a1c32d793ca0d97126fc6f0dad2d7c381", null ],
            [ "ShaderModule", "classvireo_1_1ShaderModule.html#af28df3a17d5239d67a77eeb97b74656c", null ]
          ] ],
          [ "StencilOpState", "structvireo_1_1StencilOpState.html", [
            [ "compareMask", "structvireo_1_1StencilOpState.html#ac325ac1c911a6997dbddbee3df183b94", null ],
            [ "compareOp", "structvireo_1_1StencilOpState.html#a814f76f4cc72e81b929677c333ddafe6", null ],
            [ "depthFailOp", "structvireo_1_1StencilOpState.html#aa1ebacf274f21d2a280a38879dcd4eac", null ],
            [ "failOp", "structvireo_1_1StencilOpState.html#a264a02dad6eaa98ba8827017f9de7ea7", null ],
            [ "passOp", "structvireo_1_1StencilOpState.html#a18ccaac98943c8f71fda88d577fd84d1", null ],
            [ "writeMask", "structvireo_1_1StencilOpState.html#ab1995194e9abf733d0a2ce000b19cf9a", null ]
          ] ],
          [ "SubmitQueue", "classvireo_1_1SubmitQueue.html", [
            [ "~SubmitQueue", "classvireo_1_1SubmitQueue.html#a961c172462b300e6f44dc530df1e7d17", null ],
            [ "SubmitQueue", "classvireo_1_1SubmitQueue.html#a61dfa84adc28df061667576ecb9cadf2", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#a88d529d718f02ba73427ba41d1740e7a", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#a640bd6c94ae307b547bc39759cae008e", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#ab55181dbdf67d488b4d0778661ae69c5", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#a9a1ea50fc4c3e10b72d3a772c64e00b8", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#a393613d4a2a04b5f21f0408ff1ecae03", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#aa8eb75e36fe82b016fde852d46aef1dc", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#af65ec4b4549f57db4d29feca3f12b7f0", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#a8472b83a3763420c4011e064e8b77fba", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#ac69035a0db3501a400facf408aa01214", null ],
            [ "submit", "classvireo_1_1SubmitQueue.html#a03d761194abfc389c741da8e9115e985", null ],
            [ "waitIdle", "classvireo_1_1SubmitQueue.html#a899a95c062c476e0f4616683c81a77d0", null ]
          ] ],
          [ "SwapChain", "classvireo_1_1SwapChain.html", [
            [ "~SwapChain", "classvireo_1_1SwapChain.html#a247ea6f2c82bd1f64f7c2e937ca91be8", null ],
            [ "SwapChain", "classvireo_1_1SwapChain.html#a990ee4da5b2b2006712f33ba90bf3f43", null ],
            [ "acquire", "classvireo_1_1SwapChain.html#ae2496672af9bf64c21364750705c0a76", null ],
            [ "getAspectRatio", "classvireo_1_1SwapChain.html#a9e59a36ae756e1480d52e51e42dff96b", null ],
            [ "getCurrentFrameIndex", "classvireo_1_1SwapChain.html#a47f4addafc31bdb451294a0e876aec28", null ],
            [ "getExtent", "classvireo_1_1SwapChain.html#a45a4e4e0a4c1a3b6103c0499fff8accb", null ],
            [ "getFormat", "classvireo_1_1SwapChain.html#afc623d05f6456686004dbcb40ca7c8eb", null ],
            [ "getFramesInFlight", "classvireo_1_1SwapChain.html#a2d14c2dfe78d739d36d36858b09517fb", null ],
            [ "nextFrameIndex", "classvireo_1_1SwapChain.html#ac82fd8149934c0869f852d3bba0d2a05", null ],
            [ "present", "classvireo_1_1SwapChain.html#a5013c590ffc6c133db8e4d22d53fb9ac", null ],
            [ "recreate", "classvireo_1_1SwapChain.html#a89f05908f265d0b3988b9b8a05d4be8f", null ],
            [ "waitIdle", "classvireo_1_1SwapChain.html#abf147479cb253cbe98415fafa2786700", null ],
            [ "aspectRatio", "classvireo_1_1SwapChain.html#a5c2c11f6d7929bafc3926f68dd5c00f3", null ],
            [ "currentFrameIndex", "classvireo_1_1SwapChain.html#ac81355f43c56af28af0f9d17f611549f", null ],
            [ "extent", "classvireo_1_1SwapChain.html#a77e4667fda5e52f4fc8f69d4a3acefb3", null ],
            [ "format", "classvireo_1_1SwapChain.html#a622f8b56e4fc0f1d525f146aecac445d", null ],
            [ "framesInFlight", "classvireo_1_1SwapChain.html#a9373fcba890fa359523480d4eb4e24e5", null ],
            [ "presentMode", "classvireo_1_1SwapChain.html#a17f3809524de55cc38bbf2454cd84510", null ]
          ] ],
          [ "VertexAttributeDesc", "structvireo_1_1VertexAttributeDesc.html", [
            [ "binding", "structvireo_1_1VertexAttributeDesc.html#afec68a1779c89642ee65ed7787f0694a", null ],
            [ "format", "structvireo_1_1VertexAttributeDesc.html#ac8a68c1cb22a0882fcb4cc411c85a71d", null ],
            [ "offset", "structvireo_1_1VertexAttributeDesc.html#a894bdfa2d603d8343f8ef01dda6fcd23", null ]
          ] ],
          [ "VertexInputLayout", "classvireo_1_1VertexInputLayout.html", [
            [ "~VertexInputLayout", "classvireo_1_1VertexInputLayout.html#ae7eb301c7ab7af6f2f24c859062557ec", null ],
            [ "VertexInputLayout", "classvireo_1_1VertexInputLayout.html#a660d25b92c38fbbfadd3d6580598179e", null ]
          ] ],
          [ "Viewport", "structvireo_1_1Viewport.html", [
            [ "height", "structvireo_1_1Viewport.html#a48083b65ac9a863566dc3e3fff09a5b4", null ],
            [ "maxDepth", "structvireo_1_1Viewport.html#a72002d2f063eebed05d94a9419e78540", null ],
            [ "minDepth", "structvireo_1_1Viewport.html#a14b0657c86189db37a366a2a0ca4cb9b", null ],
            [ "width", "structvireo_1_1Viewport.html#ae426f00e82704fa09578f5446e22d915", null ],
            [ "x", "structvireo_1_1Viewport.html#ad0da36b2558901e21e7a30f6c227a45e", null ],
            [ "y", "structvireo_1_1Viewport.html#aa4f0d3eebc3c443f9be81bf48561a217", null ]
          ] ],
          [ "Vireo", "classvireo_1_1Vireo.html", [
            [ "~Vireo", "classvireo_1_1Vireo.html#a59cc6c2feafd79f6bbc327679215bac0", null ],
            [ "create", "classvireo_1_1Vireo.html#a182f874336d2992e9cd06e11661e2ddb", null ],
            [ "createBuffer", "classvireo_1_1Vireo.html#aadf08ffb53e73cecc3dbdb367b6dfca2", null ],
            [ "createCommandAllocator", "classvireo_1_1Vireo.html#a9ca0900ac9674fe7f6d90b504f63b257", null ],
            [ "createComputePipeline", "classvireo_1_1Vireo.html#a534e5105e1fb9923046076185657b177", null ],
            [ "createDescriptorLayout", "classvireo_1_1Vireo.html#afdf561dca9fbe02ceed1797c8e2d42a1", null ],
            [ "createDescriptorSet", "classvireo_1_1Vireo.html#a0882cec496ac701115a20cdd81692e26", null ],
            [ "createDynamicUniformDescriptorLayout", "classvireo_1_1Vireo.html#aa1a289ca87498e905d1ed9029cd21290", null ],
            [ "createFence", "classvireo_1_1Vireo.html#a8aef3be17670442d7b908ebb408355f2", null ],
            [ "createGraphicPipeline", "classvireo_1_1Vireo.html#a4e09ff8f0ade6c4276dcf48e9910466d", null ],
            [ "createImage", "classvireo_1_1Vireo.html#a15fb317160440594ccf02dd086023129", null ],
            [ "createPipelineResources", "classvireo_1_1Vireo.html#a1a2694c5cce82ee9d6ee3a17e454f650", null ],
            [ "createReadWriteImage", "classvireo_1_1Vireo.html#a01e46b88e0e1285c1020d4c6e9bc8d0b", null ],
            [ "createRenderTarget", "classvireo_1_1Vireo.html#ac0c8e1381d3157ac234a4c4716389d73", null ],
            [ "createRenderTarget", "classvireo_1_1Vireo.html#aaa98f15a476f5e615ec473e709903bbb", null ],
            [ "createSampler", "classvireo_1_1Vireo.html#ad2ea85c73a21dbbeba59bd781c61c575", null ],
            [ "createSamplerDescriptorLayout", "classvireo_1_1Vireo.html#a70fb950592c00c0467285b00b93214ff", null ],
            [ "createSemaphore", "classvireo_1_1Vireo.html#a9a8e7ba7e45bfd388f338b5ada62cb0c", null ],
            [ "createShaderModule", "classvireo_1_1Vireo.html#ad525756f14bc5eeacfb8000edcbfa746", null ],
            [ "createSubmitQueue", "classvireo_1_1Vireo.html#a2945b364ea7c3978aa1c1e6706abf3bd", null ],
            [ "createSwapChain", "classvireo_1_1Vireo.html#ab7fe4410f37954c2e05ff87f370c1887", null ],
            [ "createVertexLayout", "classvireo_1_1Vireo.html#a7261cac5cb82702c34b49cffc08c8f74", null ],
            [ "getDevice", "classvireo_1_1Vireo.html#a130131cf643a17be360d2e2ac080b279", null ],
            [ "getInstance", "classvireo_1_1Vireo.html#a814a430e8b35e683186c96d1c358f400", null ],
            [ "getPhysicalDevice", "classvireo_1_1Vireo.html#a012469ba0acab3ce2712c7e34d08c8c9", null ],
            [ "isBackendSupported", "classvireo_1_1Vireo.html#a80cbf3a223060c85ff273d534b21059a", null ],
            [ "waitIdle", "classvireo_1_1Vireo.html#a11a419f32ea9186bbea006c34f2d5a8e", null ],
            [ "device", "classvireo_1_1Vireo.html#af05df00df285711767ba02dd25642c78", null ],
            [ "instance", "classvireo_1_1Vireo.html#a7170f6526554e5c2f194fa6192e7df92", null ],
            [ "physicalDevice", "classvireo_1_1Vireo.html#a2c9943eb40fc3c415b639d4bb111e062", null ]
          ] ]
        ] ]
      ] ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", [
        [ "std::exception", null, [
          [ "Exception", "classvireo_1_1Exception.html", null ]
        ] ],
        [ "Buffer", "classvireo_1_1Buffer.html", null ],
        [ "BufferUploadInfo", "structvireo_1_1BufferUploadInfo.html", null ],
        [ "ClearValue", "unionvireo_1_1ClearValue.html", null ],
        [ "ColorBlendDesc", "structvireo_1_1ColorBlendDesc.html", null ],
        [ "CommandAllocator", "classvireo_1_1CommandAllocator.html", null ],
        [ "CommandList", "classvireo_1_1CommandList.html", null ],
        [ "DepthClearValue", "structvireo_1_1DepthClearValue.html", null ],
        [ "DescriptorLayout", "classvireo_1_1DescriptorLayout.html", null ],
        [ "DescriptorSet", "classvireo_1_1DescriptorSet.html", null ],
        [ "Device", "classvireo_1_1Device.html", null ],
        [ "Extent", "structvireo_1_1Extent.html", null ],
        [ "Fence", "classvireo_1_1Fence.html", null ],
        [ "GraphicPipelineConfiguration", "structvireo_1_1GraphicPipelineConfiguration.html", null ],
        [ "Image", "classvireo_1_1Image.html", null ],
        [ "ImageUploadInfo", "structvireo_1_1ImageUploadInfo.html", null ],
        [ "Instance", "classvireo_1_1Instance.html", null ],
        [ "PhysicalDevice", "classvireo_1_1PhysicalDevice.html", null ],
        [ "PhysicalDeviceDesc", "structvireo_1_1PhysicalDeviceDesc.html", null ],
        [ "Pipeline", "classvireo_1_1Pipeline.html", [
          [ "ComputePipeline", "classvireo_1_1ComputePipeline.html", null ],
          [ "GraphicPipeline", "classvireo_1_1GraphicPipeline.html", null ]
        ] ],
        [ "PipelineResources", "classvireo_1_1PipelineResources.html", null ],
        [ "PushConstantsDesc", "structvireo_1_1PushConstantsDesc.html", null ],
        [ "Rect", "structvireo_1_1Rect.html", null ],
        [ "RenderingConfiguration", "structvireo_1_1RenderingConfiguration.html", null ],
        [ "RenderTarget", "classvireo_1_1RenderTarget.html", null ],
        [ "RenderTargetDesc", "structvireo_1_1RenderTargetDesc.html", null ],
        [ "Sampler", "classvireo_1_1Sampler.html", null ],
        [ "Semaphore", "classvireo_1_1Semaphore.html", null ],
        [ "ShaderModule", "classvireo_1_1ShaderModule.html", null ],
        [ "StencilOpState", "structvireo_1_1StencilOpState.html", null ],
        [ "SubmitQueue", "classvireo_1_1SubmitQueue.html", null ],
        [ "SwapChain", "classvireo_1_1SwapChain.html", null ],
        [ "VertexAttributeDesc", "structvireo_1_1VertexAttributeDesc.html", null ],
        [ "VertexInputLayout", "classvireo_1_1VertexInputLayout.html", null ],
        [ "Viewport", "structvireo_1_1Viewport.html", null ],
        [ "Vireo", "classvireo_1_1Vireo.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"about.html",
"manual_090_03_barriers.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';