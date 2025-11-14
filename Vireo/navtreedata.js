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
            [ "Buffer", "classvireo_1_1Buffer.html#a7e6334997bef1b24148eeb8d4ede910f", null ],
            [ "Buffer", "classvireo_1_1Buffer.html#acdebf436ed3dd1d97d2eb9fa1df400d6", null ],
            [ "getInstanceCount", "classvireo_1_1Buffer.html#a52d7b79d707b2535952cb263ce9bbbe5", null ],
            [ "getInstanceSize", "classvireo_1_1Buffer.html#a2a0c94e27b7fe4f968d16e44711f8383", null ],
            [ "getInstanceSizeAligned", "classvireo_1_1Buffer.html#a4733e816d7c9350929e2d24ef660e324", null ],
            [ "getMappedAddress", "classvireo_1_1Buffer.html#ad8bebf5aa656b037de89b9c8636f232b", null ],
            [ "getMemoryAllocations", "classvireo_1_1Buffer.html#a804ae24e8938faaf362fea608513e9a4", null ],
            [ "getSize", "classvireo_1_1Buffer.html#a5c1d89d2d5cd83b98e9053def9afdc99", null ],
            [ "getType", "classvireo_1_1Buffer.html#ad210334d8ff0b83b000130dfcaac2faf", null ],
            [ "map", "classvireo_1_1Buffer.html#ab787505118207f731de3eed5a7c1d7c9", null ],
            [ "operator=", "classvireo_1_1Buffer.html#a3c527e948c1a6cc8d7ccfe41003653eb", null ],
            [ "unmap", "classvireo_1_1Buffer.html#ab6614885bbf62415cd62371d7d94b301", null ],
            [ "write", "classvireo_1_1Buffer.html#a43210bfeb974e1020ee27b98bf14cd0f", null ],
            [ "bufferSize", "classvireo_1_1Buffer.html#a7be887a2ca0a258cf6b368d32fd87487", null ],
            [ "instanceCount", "classvireo_1_1Buffer.html#a03769e76e974fc0a517627ea030c81f9", null ],
            [ "instanceSize", "classvireo_1_1Buffer.html#af34c811ab25184584ba84d327ce867fc", null ],
            [ "instanceSizeAligned", "classvireo_1_1Buffer.html#a5ac6cf5a5123e40167383798584f10ad", null ],
            [ "mappedAddress", "classvireo_1_1Buffer.html#a7f58980a2c86325f5bf167aa84ead492", null ],
            [ "memoryAllocations", "classvireo_1_1Buffer.html#a6340ee8eccf0c0148442f28eaeb92944", null ],
            [ "memoryAllocationsMutex", "classvireo_1_1Buffer.html#a03e8365a32e4486b8f6cef71014ee1fb", null ],
            [ "WHOLE_SIZE", "classvireo_1_1Buffer.html#a8ece8a4ec9f37e2f57460b4e04d96b71", null ]
          ] ],
          [ "BufferCopyRegion", "structvireo_1_1BufferCopyRegion.html", [
            [ "dstOffset", "structvireo_1_1BufferCopyRegion.html#a9eefd0516ef7815b2225d968ab2a9481", null ],
            [ "size", "structvireo_1_1BufferCopyRegion.html#a854352f53b148adc24983a58a1866d66", null ],
            [ "srcOffset", "structvireo_1_1BufferCopyRegion.html#a737cc2e0d325c058c102099c78e053d2", null ]
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
            [ "CommandAllocator", "classvireo_1_1CommandAllocator.html#ac880476b6935213b7ce58eb84e0fc15b", null ],
            [ "CommandAllocator", "classvireo_1_1CommandAllocator.html#a6da945bd6f093b23cc2fc569588fff7a", null ],
            [ "createCommandList", "classvireo_1_1CommandAllocator.html#ac16a2d577cbe040ddb146be53b8fa63a", null ],
            [ "createCommandList", "classvireo_1_1CommandAllocator.html#ae429ce00d82379f34737fe3c58f5a816", null ],
            [ "createCommandList", "classvireo_1_1CommandAllocator.html#af8b89a4bb7e9245c1fd888395cb75b87", null ],
            [ "getCommandListType", "classvireo_1_1CommandAllocator.html#ac9801a52fd19207a55590b30d3803f48", null ],
            [ "operator=", "classvireo_1_1CommandAllocator.html#a146964e233912eb6c52ca7c5bb916620", null ],
            [ "reset", "classvireo_1_1CommandAllocator.html#aeb83a854bf8d34bf39c12aad1fb726f8", null ]
          ] ],
          [ "CommandList", "classvireo_1_1CommandList.html", [
            [ "~CommandList", "classvireo_1_1CommandList.html#ad955b9c8fe3bac1aab6bdc8e9c8e4c16", null ],
            [ "CommandList", "classvireo_1_1CommandList.html#a635df82a55b7f69fe7f39649c0ebe060", null ],
            [ "CommandList", "classvireo_1_1CommandList.html#abfe584ee02cc3879de28d0ec3b25afd4", null ],
            [ "barrier", "classvireo_1_1CommandList.html#a3749cf969f9e2e329f5981ea1d72b5fe", null ],
            [ "barrier", "classvireo_1_1CommandList.html#aa97d0ab80ed8a2d96e328ba6c70fa05f", null ],
            [ "barrier", "classvireo_1_1CommandList.html#a198f5b50e5a059e163612fb368a92763", null ],
            [ "barrier", "classvireo_1_1CommandList.html#ac790194dca54214baaa5a91093468a9c", null ],
            [ "barrier", "classvireo_1_1CommandList.html#a4dd9c3812bc98b2eb1604993721f9816", null ],
            [ "begin", "classvireo_1_1CommandList.html#a9d8433d072337e25242ff5d22773ab26", null ],
            [ "beginRendering", "classvireo_1_1CommandList.html#a6ba4e02576315caa1e88649a7fe3cc14", null ],
            [ "bindDescriptor", "classvireo_1_1CommandList.html#a6ff81de5f5e1117f79f53ea188e69261", null ],
            [ "bindDescriptor", "classvireo_1_1CommandList.html#a72cb094bbf71aa0515ca9ceef00b7a51", null ],
            [ "bindDescriptor", "classvireo_1_1CommandList.html#a8b6cd5baa44885a3d042474185b7607e", null ],
            [ "bindDescriptor", "classvireo_1_1CommandList.html#a3e76a036a7e3dda70a863cee775dcb8b", null ],
            [ "bindDescriptors", "classvireo_1_1CommandList.html#a3535ac483618d6fd4212263da3676aee", null ],
            [ "bindIndexBuffer", "classvireo_1_1CommandList.html#aa256a3e38a73c6f41388ce87440d055f", null ],
            [ "bindIndexBuffer", "classvireo_1_1CommandList.html#a19a4ca323a4060c34c56e524eec69571", null ],
            [ "bindPipeline", "classvireo_1_1CommandList.html#aa80e355c41fa0b5b2c66a2d696176d99", null ],
            [ "bindPipeline", "classvireo_1_1CommandList.html#ae59cd598a031d283ff3be6856ceff8b3", null ],
            [ "bindVertexBuffer", "classvireo_1_1CommandList.html#a335a277f9a31e5d912d84330607ceb02", null ],
            [ "bindVertexBuffer", "classvireo_1_1CommandList.html#a57469b04a07fda31e919ffd73e110382", null ],
            [ "bindVertexBuffers", "classvireo_1_1CommandList.html#aa4dcfdc4d3b6a44813d95585da2af5a6", null ],
            [ "cleanup", "classvireo_1_1CommandList.html#acbb28cf8bdd606e0131fc72218504abc", null ],
            [ "copy", "classvireo_1_1CommandList.html#a64f2f162e0a995959ca05a3449ff0504", null ],
            [ "copy", "classvireo_1_1CommandList.html#a168ee0b6f8060b96ab62aaebd5bcb0f3", null ],
            [ "copy", "classvireo_1_1CommandList.html#afe4291b3d222cc65264495de26c3546b", null ],
            [ "copy", "classvireo_1_1CommandList.html#ad6031b3ab0b1c2a9e50290b3426490aa", null ],
            [ "copy", "classvireo_1_1CommandList.html#a0ea9cfdd597aed2818db64810f98fd38", null ],
            [ "copy", "classvireo_1_1CommandList.html#a42499cfedaa56a15c9b684e35b27112f", null ],
            [ "copy", "classvireo_1_1CommandList.html#a4d2860a480755c49d7e15aef92aed89e", null ],
            [ "copy", "classvireo_1_1CommandList.html#a911fb333be3ee284750df201a21d1ad2", null ],
            [ "copy", "classvireo_1_1CommandList.html#a5546e02c0a26bad749da53bde6ed356e", null ],
            [ "copy", "classvireo_1_1CommandList.html#a535b8952e405079ba66928acdf8e1ba9", null ],
            [ "copy", "classvireo_1_1CommandList.html#a4ed183f64c88a79dc598ae5d951c6dc0", null ],
            [ "copy", "classvireo_1_1CommandList.html#a6cce0822fc60b62e63abc4da3d3306c9", null ],
            [ "copy", "classvireo_1_1CommandList.html#a6155962d70b0020767086c561986d8b2", null ],
            [ "copy", "classvireo_1_1CommandList.html#a569b56acb8adf2e9a1db6546cdb4b4b0", null ],
            [ "dispatch", "classvireo_1_1CommandList.html#ac9ccb188621db6fe1fbf5a0be92af3a2", null ],
            [ "draw", "classvireo_1_1CommandList.html#adbf42c05f74289eb98698b991098a9d6", null ],
            [ "drawIndexed", "classvireo_1_1CommandList.html#aebe6ecf3de6f810b09a9d80dc38bbd8d", null ],
            [ "drawIndexedIndirect", "classvireo_1_1CommandList.html#a5c4f86a3bbc2f1cc60df94d743d37c6d", null ],
            [ "drawIndexedIndirect", "classvireo_1_1CommandList.html#a02ef4ee519ef236ae041fa32029122ea", null ],
            [ "drawIndexedIndirectCount", "classvireo_1_1CommandList.html#a97d2ae643dd36b590ca9f39fdfc075cb", null ],
            [ "drawIndexedIndirectCount", "classvireo_1_1CommandList.html#a43c35d761b18f2060280e0b6a1fd9198", null ],
            [ "drawIndirect", "classvireo_1_1CommandList.html#a5c144f1c3f92a685f15631a5b2452288", null ],
            [ "drawIndirect", "classvireo_1_1CommandList.html#aaf0151da78b5214e115cb6d33b6ec061", null ],
            [ "end", "classvireo_1_1CommandList.html#aea5bef9f8eaa5046c3c3104b35a712d4", null ],
            [ "endRendering", "classvireo_1_1CommandList.html#a3ce769f37a91b6136e8821ab84810d3b", null ],
            [ "operator=", "classvireo_1_1CommandList.html#a38c3896e538cf41dbfbc50061e61a7c3", null ],
            [ "pushConstants", "classvireo_1_1CommandList.html#a544932598c54739d02736fea07d89d5f", null ],
            [ "setScissors", "classvireo_1_1CommandList.html#a6a24283dc6a5be9a4e1c60381eee1adf", null ],
            [ "setScissors", "classvireo_1_1CommandList.html#a6dc62d9eb2c40c567601533cb5e6027b", null ],
            [ "setStencilReference", "classvireo_1_1CommandList.html#a0798bbed3923ec01a5a2f88da5107417", null ],
            [ "setViewport", "classvireo_1_1CommandList.html#a911187b21e2b76ebe840875e2c30643d", null ],
            [ "setViewports", "classvireo_1_1CommandList.html#abaaf97a16cf11298ed05a56f930e0f55", null ],
            [ "upload", "classvireo_1_1CommandList.html#a44291fef9821033f491516f6bf0d4ba4", null ],
            [ "upload", "classvireo_1_1CommandList.html#a4505d174abaa0687981bd7f5cf102d5d", null ],
            [ "upload", "classvireo_1_1CommandList.html#a3f3af27666535692aff2978f9ce4fdac", null ],
            [ "upload", "classvireo_1_1CommandList.html#ab6c872d78458fd50c061dbf3bc97f363", null ],
            [ "upload", "classvireo_1_1CommandList.html#aa95f37f5723a600fdde166834ef4b20a", null ],
            [ "upload", "classvireo_1_1CommandList.html#a376d70280f7cbe0a7432c9b11f60e6fb", null ],
            [ "uploadArray", "classvireo_1_1CommandList.html#abd8c18c11d369fcc8f84e88cb69dc52d", null ],
            [ "uploadArray", "classvireo_1_1CommandList.html#a82e4fdd78ea7de9450cd0e1afe1da30e", null ],
            [ "currentlyBoundPipeline", "classvireo_1_1CommandList.html#a76f4f1d57b0e15cea10c9726a39585c1", null ],
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
            [ "DescriptorLayout", "classvireo_1_1DescriptorLayout.html#af194e118c2d737ac11a826711ad3c8ac", null ],
            [ "DescriptorLayout", "classvireo_1_1DescriptorLayout.html#a03b5b4c14f82eb8858267ba922f5976a", null ],
            [ "add", "classvireo_1_1DescriptorLayout.html#af69e6672ce8e9ad0be1b2c10fddf2f00", null ],
            [ "build", "classvireo_1_1DescriptorLayout.html#a9d887f6f043a4b7c3388ca7aba0b070c", null ],
            [ "getCapacity", "classvireo_1_1DescriptorLayout.html#a62cd3e9eb1bd3a97366e20bfb4ddf884", null ],
            [ "isDynamicUniform", "classvireo_1_1DescriptorLayout.html#a38f1988f4985c4b56237394ec3edff7c", null ],
            [ "isSamplers", "classvireo_1_1DescriptorLayout.html#a8f630189b3863a5665b09ca0d24fcc12", null ],
            [ "operator=", "classvireo_1_1DescriptorLayout.html#ac1191df8ceb5fc5fec571d65adb0586f", null ],
            [ "capacity", "classvireo_1_1DescriptorLayout.html#ad721fc6ca6a3d6ba3bc506576622aab0", null ],
            [ "dynamic", "classvireo_1_1DescriptorLayout.html#a8fcad9320dc8957d766ebf5a5293450e", null ],
            [ "samplers", "classvireo_1_1DescriptorLayout.html#a8dbf2e26bf6ee6c103af0449a03a60e1", null ]
          ] ],
          [ "DescriptorSet", "classvireo_1_1DescriptorSet.html", [
            [ "~DescriptorSet", "classvireo_1_1DescriptorSet.html#a024145a9c45328f376fcff5fa116fc1d", null ],
            [ "DescriptorSet", "classvireo_1_1DescriptorSet.html#a440a853831f747a860df42f48ee70fed", null ],
            [ "DescriptorSet", "classvireo_1_1DescriptorSet.html#a070d34eab9631814c8c2ce30f2d41e70", null ],
            [ "getLayout", "classvireo_1_1DescriptorSet.html#a0b8db00a5c7d65da0e961934cb653ff3", null ],
            [ "operator=", "classvireo_1_1DescriptorSet.html#a3e8d8eff5149160a02d0fe2490e2b299", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a30e14ace92b96dd96f8d142002b813fe", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a71a75bbb32ce85a23960952d5dc4417b", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a3fe674ff846ee1ec5e33f6c0bc60fa06", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#af06d315f9194b480823ebcdb3d54ff1d", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#abf82819b6a3c44dbd715dce4b190a5fa", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#aa1bbd538588111ccfd75bb4e3a4f8116", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a9fb5a9ffa586392106d490a6c2d67f6a", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#ac6b994b467a40c6658747566e8998a71", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#aaa9ab71a74016a857885d524257a05fb", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#aacc82b49c2dd66d318bd9b6101a27aa1", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#acff265eaf673ca2875eba4036f9ab02d", null ],
            [ "update", "classvireo_1_1DescriptorSet.html#a0ce636f2e2fe5b210dcac341cb1122fd", null ],
            [ "layout", "classvireo_1_1DescriptorSet.html#a00c9bb91daa3996bf09a781e96306b9c", null ]
          ] ],
          [ "Device", "classvireo_1_1Device.html", [
            [ "~Device", "classvireo_1_1Device.html#ac31b8af5d051873b0b54428958e6e1b1", null ],
            [ "Device", "classvireo_1_1Device.html#a42de242881ba3e9080d5ab19fa8ec422", null ],
            [ "Device", "classvireo_1_1Device.html#a43701d9a19f5bd389b1bd01b74acaf4d", null ],
            [ "haveDedicatedTransferQueue", "classvireo_1_1Device.html#ad27c6c517505e6e5c5d7fc490f9ca8e5", null ],
            [ "operator=", "classvireo_1_1Device.html#a65b71b57a9a1ce6363836286b3e46739", null ]
          ] ],
          [ "DrawIndexedIndirectCommand", "structvireo_1_1DrawIndexedIndirectCommand.html", [
            [ "firstIndex", "structvireo_1_1DrawIndexedIndirectCommand.html#a20304b5bcf4d3a46129f4850f9430496", null ],
            [ "firstInstance", "structvireo_1_1DrawIndexedIndirectCommand.html#ad927ee80dbd4ffccae3cfec70223a44f", null ],
            [ "indexCount", "structvireo_1_1DrawIndexedIndirectCommand.html#a365dca1d4e70031d2266ccbe206a19da", null ],
            [ "instanceCount", "structvireo_1_1DrawIndexedIndirectCommand.html#a03769e76e974fc0a517627ea030c81f9", null ],
            [ "vertexOffset", "structvireo_1_1DrawIndexedIndirectCommand.html#aa0ca9e04a18a5580f33102c6de78ece2", null ]
          ] ],
          [ "DrawIndirectCommand", "structvireo_1_1DrawIndirectCommand.html", [
            [ "firstInstance", "structvireo_1_1DrawIndirectCommand.html#ad927ee80dbd4ffccae3cfec70223a44f", null ],
            [ "firstVertex", "structvireo_1_1DrawIndirectCommand.html#a125e2544a140a3596efa2aa38b91a9a2", null ],
            [ "instanceCount", "structvireo_1_1DrawIndirectCommand.html#a03769e76e974fc0a517627ea030c81f9", null ],
            [ "vertexCount", "structvireo_1_1DrawIndirectCommand.html#af25fb48fdcc7c79d682da8c375e24192", null ]
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
            [ "Fence", "classvireo_1_1Fence.html#aad9b8ec456eb3dfb649288d6d412d8e1", null ],
            [ "Fence", "classvireo_1_1Fence.html#a2313d6cccb48b7c8156f688c2b0cf880", null ],
            [ "operator=", "classvireo_1_1Fence.html#a0c33c1293c092302aac092b0a62b7407", null ],
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
            [ "Image", "classvireo_1_1Image.html#a6a92512b800ab1a87ef90a4cd0322af5", null ],
            [ "Image", "classvireo_1_1Image.html#a1498bf4731472241234dcdb11346ec96", null ],
            [ "getAlignedImageSize", "classvireo_1_1Image.html#ae54cb994e4c9b53889d37efd7ee0c01a", null ],
            [ "getAlignedRowLength", "classvireo_1_1Image.html#a3f33171db0cc7dcc959bbb66ef34a727", null ],
            [ "getAlignedRowPitch", "classvireo_1_1Image.html#aaa8f63d2d1ee31692dda8794e6413b2f", null ],
            [ "getArraySize", "classvireo_1_1Image.html#a3205b6093998c9d6e95797b9945d9f12", null ],
            [ "getFormat", "classvireo_1_1Image.html#afc623d05f6456686004dbcb40ca7c8eb", null ],
            [ "getHeight", "classvireo_1_1Image.html#afb671e8ff01febf709d9074687f2bfb4", null ],
            [ "getImageSize", "classvireo_1_1Image.html#a92644abed7e41134269173917d9673a2", null ],
            [ "getMemoryAllocations", "classvireo_1_1Image.html#a804ae24e8938faaf362fea608513e9a4", null ],
            [ "getMipLevels", "classvireo_1_1Image.html#a478d4753c0a41af74ce533f34dde9aab", null ],
            [ "getPixelSize", "classvireo_1_1Image.html#a0fc7b7de771482442d779aaa8b909ade", null ],
            [ "getRowLength", "classvireo_1_1Image.html#a955b2b6e4a34781bfecee68cc0ab3eae", null ],
            [ "getRowPitch", "classvireo_1_1Image.html#a3230fb82e22aa23560fa47417254c1d0", null ],
            [ "getWidth", "classvireo_1_1Image.html#a0af04d5df99f552fc7a05a4bf7f5c4e9", null ],
            [ "isDepthFormat", "classvireo_1_1Image.html#a24067b3e73a598dae1b7c79c000d6461", null ],
            [ "isDepthFormat", "classvireo_1_1Image.html#aecfb468d76eb08fbe462305aa7ab067d", null ],
            [ "isDepthStencilFormat", "classvireo_1_1Image.html#ae6d82761953702504375fe296ef5e5ab", null ],
            [ "isDepthStencilFormat", "classvireo_1_1Image.html#a8e3d9d1cd4a47ad5572f66c7605cfe73", null ],
            [ "isReadWrite", "classvireo_1_1Image.html#a155411af8144a14654748c1c95e5b676", null ],
            [ "operator=", "classvireo_1_1Image.html#acc11fabfe1dc19bd304b444d8b9e1c54", null ],
            [ "IMAGE_ROW_PITCH_ALIGNMENT", "classvireo_1_1Image.html#aa05be981d7486fd57288d143677cc33d", null ],
            [ "memoryAllocations", "classvireo_1_1Image.html#a6340ee8eccf0c0148442f28eaeb92944", null ],
            [ "memoryAllocationsMutex", "classvireo_1_1Image.html#a03e8365a32e4486b8f6cef71014ee1fb", null ],
            [ "pixelSize", "classvireo_1_1Image.html#a8207d073132308fdaf5cf16fcf0ec3b1", null ]
          ] ],
          [ "ImageUploadInfo", "structvireo_1_1ImageUploadInfo.html", [
            [ "data", "structvireo_1_1ImageUploadInfo.html#a0d49d74db4c035719c3867723cf7e779", null ],
            [ "image", "structvireo_1_1ImageUploadInfo.html#aa587190f7c4a08481891a467f21da54e", null ]
          ] ],
          [ "Instance", "classvireo_1_1Instance.html", [
            [ "~Instance", "classvireo_1_1Instance.html#a1c72925d928401fa70069b8c25f20987", null ],
            [ "Instance", "classvireo_1_1Instance.html#a6a46da3a29fe14d14348391e64327f92", null ],
            [ "Instance", "classvireo_1_1Instance.html#afeb5cdce7e289265cc8cdf11eced5be5", null ],
            [ "operator=", "classvireo_1_1Instance.html#a265b799d75ae33108ae05fd6b752ca61", null ]
          ] ],
          [ "PhysicalDevice", "classvireo_1_1PhysicalDevice.html", [
            [ "~PhysicalDevice", "classvireo_1_1PhysicalDevice.html#a94345c3a92a173f42c5b61fcc7240d80", null ],
            [ "PhysicalDevice", "classvireo_1_1PhysicalDevice.html#a6596c67031d5f5319abedc7387f843ad", null ],
            [ "PhysicalDevice", "classvireo_1_1PhysicalDevice.html#a0b6f457287ae397513ea5deb7d5bc431", null ],
            [ "getDescription", "classvireo_1_1PhysicalDevice.html#a6cc9a81a5bb21326ba6504b0bf763e8d", null ],
            [ "operator=", "classvireo_1_1PhysicalDevice.html#a086fcefb6e7b6b3d4504c557a6a65b66", null ]
          ] ],
          [ "PhysicalDeviceDesc", "structvireo_1_1PhysicalDeviceDesc.html", [
            [ "dedicatedSystemMemory", "structvireo_1_1PhysicalDeviceDesc.html#aa4525c3a2179173ab02607893b2eef18", null ],
            [ "dedicatedVideoMemory", "structvireo_1_1PhysicalDeviceDesc.html#af3e29e8dcfd49aff66a644ebb62201f8", null ],
            [ "name", "structvireo_1_1PhysicalDeviceDesc.html#a9b45b3e13bd9167aab02e17e08916231", null ],
            [ "sharedSystemMemory", "structvireo_1_1PhysicalDeviceDesc.html#ae788205bed0bd7950f543edd7f9992a6", null ]
          ] ],
          [ "Pipeline", "classvireo_1_1Pipeline.html", [
            [ "~Pipeline", "classvireo_1_1Pipeline.html#ad16ff9c09ba217ca742ef1881af150dd", null ],
            [ "Pipeline", "classvireo_1_1Pipeline.html#a3e5a31f01ded90a4dc7134e616b244aa", null ],
            [ "Pipeline", "classvireo_1_1Pipeline.html#aff6cc225ab6af6ea88a83fa212fd9d2d", null ],
            [ "getResources", "classvireo_1_1Pipeline.html#aad6088df25a67c063da0e75b060e87e5", null ],
            [ "getType", "classvireo_1_1Pipeline.html#ad210334d8ff0b83b000130dfcaac2faf", null ],
            [ "operator=", "classvireo_1_1Pipeline.html#aafde3916886680b125078b824562c461", null ]
          ] ],
          [ "PipelineResources", "classvireo_1_1PipelineResources.html", [
            [ "~PipelineResources", "classvireo_1_1PipelineResources.html#ac474f8c0391c5815733789d982e91efd", null ],
            [ "PipelineResources", "classvireo_1_1PipelineResources.html#a80a9025e8f11dae141ce82f723a50140", null ],
            [ "PipelineResources", "classvireo_1_1PipelineResources.html#ac1b6cfc7b45fe8841cee5f9d5483ee84", null ],
            [ "operator=", "classvireo_1_1PipelineResources.html#a23960b4b9301467df09eb3851ed96a7b", null ]
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
            [ "RenderTarget", "classvireo_1_1RenderTarget.html#a61504567d4eb89800c3907ed84a5b1a4", null ],
            [ "~RenderTarget", "classvireo_1_1RenderTarget.html#a675f87aedb645ebd1837900ca50823a3", null ],
            [ "RenderTarget", "classvireo_1_1RenderTarget.html#aba128492e798cd0ab415046d8fa9026d", null ],
            [ "getImage", "classvireo_1_1RenderTarget.html#a36d6c9dadaea9974284955a0345c83a2", null ],
            [ "getType", "classvireo_1_1RenderTarget.html#ad210334d8ff0b83b000130dfcaac2faf", null ],
            [ "operator=", "classvireo_1_1RenderTarget.html#a1f69cb86259c598517136c25dced544f", null ]
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
            [ "Sampler", "classvireo_1_1Sampler.html#a860231ff78f61e515144c74f419f2cbd", null ],
            [ "Sampler", "classvireo_1_1Sampler.html#a504edf3c2535a80ad21e39bcca752abe", null ],
            [ "operator=", "classvireo_1_1Sampler.html#abfff1620ad63a29862ea020cfc86cd2f", null ],
            [ "LOD_CLAMP_NONE", "classvireo_1_1Sampler.html#aa0d3e96061c1d4a80882d9a36c6193c8", null ]
          ] ],
          [ "Semaphore", "classvireo_1_1Semaphore.html", [
            [ "Semaphore", "classvireo_1_1Semaphore.html#a4b702fb86b21d426f67dfb288e9ebb0c", null ],
            [ "~Semaphore", "classvireo_1_1Semaphore.html#a542ed9262c4c60d435711271d1d33a13", null ],
            [ "Semaphore", "classvireo_1_1Semaphore.html#a81f4d1d2c4f0c9e65f309136300495f8", null ],
            [ "decrementValue", "classvireo_1_1Semaphore.html#ac652823473f741abc1e6eb12b72552d9", null ],
            [ "getType", "classvireo_1_1Semaphore.html#ad210334d8ff0b83b000130dfcaac2faf", null ],
            [ "getValue", "classvireo_1_1Semaphore.html#a749e335c2e7699637beac1d19bc6ac0a", null ],
            [ "incrementValue", "classvireo_1_1Semaphore.html#afa6200d893b177d976ea38086fcc692d", null ],
            [ "operator=", "classvireo_1_1Semaphore.html#a7bcabbe26fe9e9a3706cefda4a4e5110", null ],
            [ "setValue", "classvireo_1_1Semaphore.html#a772423f5807d5a30b60c9284206e61ff", null ],
            [ "type", "classvireo_1_1Semaphore.html#a2f872a77de13dbcc2e58c7d61e015d9b", null ],
            [ "value", "classvireo_1_1Semaphore.html#a4e630859cc0e2a22bd6acf39a6a8e218", null ]
          ] ],
          [ "ShaderModule", "classvireo_1_1ShaderModule.html", [
            [ "~ShaderModule", "classvireo_1_1ShaderModule.html#a1c32d793ca0d97126fc6f0dad2d7c381", null ],
            [ "ShaderModule", "classvireo_1_1ShaderModule.html#a2c74c38367f8e7e85c95f5ab0416b8c5", null ],
            [ "ShaderModule", "classvireo_1_1ShaderModule.html#af28df3a17d5239d67a77eeb97b74656c", null ],
            [ "operator=", "classvireo_1_1ShaderModule.html#a08a4231cf3a1ca1e0b2dddb4f9209336", null ]
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
            [ "SubmitQueue", "classvireo_1_1SubmitQueue.html#afb503d56d93277eafe04d2b856c00466", null ],
            [ "SubmitQueue", "classvireo_1_1SubmitQueue.html#a61dfa84adc28df061667576ecb9cadf2", null ],
            [ "operator=", "classvireo_1_1SubmitQueue.html#ae3930b1bfc0eaef98223a795e1a1f437", null ],
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
            [ "SwapChain", "classvireo_1_1SwapChain.html#afd23e14f3ec25d4510523c6481376119", null ],
            [ "SwapChain", "classvireo_1_1SwapChain.html#a990ee4da5b2b2006712f33ba90bf3f43", null ],
            [ "acquire", "classvireo_1_1SwapChain.html#ae2496672af9bf64c21364750705c0a76", null ],
            [ "getAspectRatio", "classvireo_1_1SwapChain.html#a9e59a36ae756e1480d52e51e42dff96b", null ],
            [ "getCurrentFrameIndex", "classvireo_1_1SwapChain.html#a47f4addafc31bdb451294a0e876aec28", null ],
            [ "getExtent", "classvireo_1_1SwapChain.html#a45a4e4e0a4c1a3b6103c0499fff8accb", null ],
            [ "getFormat", "classvireo_1_1SwapChain.html#afc623d05f6456686004dbcb40ca7c8eb", null ],
            [ "getFramesInFlight", "classvireo_1_1SwapChain.html#a2d14c2dfe78d739d36d36858b09517fb", null ],
            [ "nextFrameIndex", "classvireo_1_1SwapChain.html#ac82fd8149934c0869f852d3bba0d2a05", null ],
            [ "operator=", "classvireo_1_1SwapChain.html#a8ee5c3ae3bc9abc5f1425750f3f1c31d", null ],
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
            [ "VertexInputLayout", "classvireo_1_1VertexInputLayout.html#ae1c449aa3a480ab7009a53262f4eee18", null ],
            [ "VertexInputLayout", "classvireo_1_1VertexInputLayout.html#a660d25b92c38fbbfadd3d6580598179e", null ],
            [ "operator=", "classvireo_1_1VertexInputLayout.html#ad100496aaf9a7e9dc76e0729a675cf03", null ]
          ] ],
          [ "VideoMemoryAllocationDesc", "structvireo_1_1VideoMemoryAllocationDesc.html", [
            [ "name", "structvireo_1_1VideoMemoryAllocationDesc.html#a9b45b3e13bd9167aab02e17e08916231", null ],
            [ "ref", "structvireo_1_1VideoMemoryAllocationDesc.html#a1830ddb36c14bdd7057683e633f918c8", null ],
            [ "size", "structvireo_1_1VideoMemoryAllocationDesc.html#a854352f53b148adc24983a58a1866d66", null ],
            [ "usage", "structvireo_1_1VideoMemoryAllocationDesc.html#a2735d3353b8c7fd0fdc4d4a1bb9221de", null ]
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
            [ "Vireo", "classvireo_1_1Vireo.html#a3266f46274db66fa6695557a8a6481aa", null ],
            [ "Vireo", "classvireo_1_1Vireo.html#a617bc5bcc5b8e21defdb004391dd8eda", null ],
            [ "create", "classvireo_1_1Vireo.html#abf575dfb65f8e925b32518637eed0f13", null ],
            [ "createBuffer", "classvireo_1_1Vireo.html#aa64c2fefc828d82079faec6d1a6479bc", null ],
            [ "createCommandAllocator", "classvireo_1_1Vireo.html#a9ca0900ac9674fe7f6d90b504f63b257", null ],
            [ "createComputePipeline", "classvireo_1_1Vireo.html#a93680254b13d5a0f6e4469ae1f2d212d", null ],
            [ "createDescriptorLayout", "classvireo_1_1Vireo.html#a114470e61863463e4c14c54e175ec165", null ],
            [ "createDescriptorSet", "classvireo_1_1Vireo.html#a4396a4872f128ccec266b930f287c143", null ],
            [ "createDynamicUniformDescriptorLayout", "classvireo_1_1Vireo.html#a3f624865c1c4a94e5491e9f9675711da", null ],
            [ "createFence", "classvireo_1_1Vireo.html#a0c2ebef35a062c7df229df0340efa123", null ],
            [ "createGraphicPipeline", "classvireo_1_1Vireo.html#a615a432a94cb4a9893ea9a1427b2d3a8", null ],
            [ "createImage", "classvireo_1_1Vireo.html#a46a31fa2f56004c293d3f7e55874161a", null ],
            [ "createPipelineResources", "classvireo_1_1Vireo.html#ae69902c7e13de727a258741a6cd4a45a", null ],
            [ "createReadWriteImage", "classvireo_1_1Vireo.html#ae9e9f2308597f8896855226d4c4b43cb", null ],
            [ "createRenderTarget", "classvireo_1_1Vireo.html#a30c80829ec0e86247726368118cb3b1d", null ],
            [ "createRenderTarget", "classvireo_1_1Vireo.html#a14097abe2469bd41accbbb9851e9a39c", null ],
            [ "createSampler", "classvireo_1_1Vireo.html#a1a6992ef632dda86b6284e2ef96097bb", null ],
            [ "createSamplerDescriptorLayout", "classvireo_1_1Vireo.html#a88b70d9f19a4f5e1db6a3e65bac03ffa", null ],
            [ "createSemaphore", "classvireo_1_1Vireo.html#ae01aad7e985ba9d7bf4591f381249e7d", null ],
            [ "createShaderModule", "classvireo_1_1Vireo.html#ad525756f14bc5eeacfb8000edcbfa746", null ],
            [ "createShaderModule", "classvireo_1_1Vireo.html#a6b2f2d741c06abf79ef784607e31eddd", null ],
            [ "createSubmitQueue", "classvireo_1_1Vireo.html#a177ae3f60519631951244559da69e43f", null ],
            [ "createSwapChain", "classvireo_1_1Vireo.html#ab7fe4410f37954c2e05ff87f370c1887", null ],
            [ "createVertexLayout", "classvireo_1_1Vireo.html#a7261cac5cb82702c34b49cffc08c8f74", null ],
            [ "getDevice", "classvireo_1_1Vireo.html#a130131cf643a17be360d2e2ac080b279", null ],
            [ "getInstance", "classvireo_1_1Vireo.html#a814a430e8b35e683186c96d1c358f400", null ],
            [ "getPhysicalDevice", "classvireo_1_1Vireo.html#a012469ba0acab3ce2712c7e34d08c8c9", null ],
            [ "getShaderFileExtension", "classvireo_1_1Vireo.html#ac82798021e315c7f00d64912a9c0ad93", null ],
            [ "isBackendSupported", "classvireo_1_1Vireo.html#a80cbf3a223060c85ff273d534b21059a", null ],
            [ "operator=", "classvireo_1_1Vireo.html#af674909511b442a85ec91f4f95ba2504", null ],
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
        [ "BufferCopyRegion", "structvireo_1_1BufferCopyRegion.html", null ],
        [ "BufferUploadInfo", "structvireo_1_1BufferUploadInfo.html", null ],
        [ "ClearValue", "unionvireo_1_1ClearValue.html", null ],
        [ "ColorBlendDesc", "structvireo_1_1ColorBlendDesc.html", null ],
        [ "CommandAllocator", "classvireo_1_1CommandAllocator.html", null ],
        [ "CommandList", "classvireo_1_1CommandList.html", null ],
        [ "DepthClearValue", "structvireo_1_1DepthClearValue.html", null ],
        [ "DescriptorLayout", "classvireo_1_1DescriptorLayout.html", null ],
        [ "DescriptorSet", "classvireo_1_1DescriptorSet.html", null ],
        [ "Device", "classvireo_1_1Device.html", null ],
        [ "DrawIndexedIndirectCommand", "structvireo_1_1DrawIndexedIndirectCommand.html", null ],
        [ "DrawIndirectCommand", "structvireo_1_1DrawIndirectCommand.html", null ],
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
        [ "VideoMemoryAllocationDesc", "structvireo_1_1VideoMemoryAllocationDesc.html", null ],
        [ "Viewport", "structvireo_1_1Viewport.html", null ],
        [ "Vireo", "classvireo_1_1Vireo.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"about.html",
"classvireo_1_1SwapChain.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';