import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} overflowY={'auto'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'flex-start'} p={8} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
            <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas molestias harum nulla, unde esse quia sed mollitia
            delectus, voluptatem impedit similique! Ipsam magnam ea laboriosam
            error ducimus distinctio sit deleniti! Debitis cumque est
            consequuntur natus ut. Consequatur totam dolore corporis doloremque
            voluptate quasi. <br /> Dolorum molestiae, unde earum quibusdam quia
            distinctio at recusandae natus et nemo, temporibus repellendus.
            Dolore, iusto officiis. Eveniet, laborum voluptatum quas odit veniam
            cumque iure nulla aspernatur laboriosam pariatur, hic velit corrupti
            vero repudiandae aliquam ducimus voluptate ut unde consequatur!
            Officia provident nesciunt, tempora nemo culpa vitae? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            corrupti tenetur magnam ad nobis dolore accusantium distinctio magni
            et quod commodi unde deleniti totam repellat sapiente inventore nemo
            asperiores sed. Sint neque reiciendis laboriosam atque, expedita
            delectus nesciunt perferendis praesentium esse nemo corrupti unde
            culpa vel, omnis numquam voluptate ab odio ipsam possimus ipsa et
            corporis rerum perspiciatis tempora.
          </Text>
        </VStack>
      </VStack>
      <hr></hr>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={8}
        spacing={8}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
            <Button
                key={index}
            variant={'ghost'}
            colorScheme="purple"
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};
export default Videos;
