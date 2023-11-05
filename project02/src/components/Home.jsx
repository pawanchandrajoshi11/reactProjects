import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '40%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={('column', 'row')}
        >
          <Image src={img5} h={[40, 400]} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={[4, 16]}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            molestiae nesciunt corrupti. At excepturi, adipisci rerum rem, fuga,
            necessitatibus quod magni vitae tempora ullam libero temporibus
            quibusdam ea provident. Quo. Porro, alias, molestiae enim aspernatur
            nostrum dicta quo dolores ab iure impedit in deserunt optio nihil
            beatae aliquid accusamus nisi sed. Mollitia voluptatem nesciunt
            delectus labore sed perspiciatis animi alias. Pariatur accusamus
            consequatur, unde quis reprehenderit, sint laborum ratione iste
            deleniti quisquam voluptates veniam! Accusantium culpa rem esse
            suscipit at ratione voluptate, iure dolores optio est corrupti
            fugit, totam nulla! Nesciunt animi deserunt, dolorum facilis
            consectetur facere. Cupiditate maiores facilis soluta et
            accusantium, consectetur nihil doloribus dolor error id rerum
            ducimus iusto accusamus in! Reiciendis perspiciatis rerum illo esse
            et! Earum cupiditate exercitationem, dolore rem laudantium impedit
            quae. Molestiae fuga tempora vitae, voluptatum nobis excepturi ea,
            mollitia reprehenderit necessitatibus esse magnam accusantium
            laboriosam ipsum consequatur iusto in aut maxime blanditiis?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box width={'full'} height={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
      <Box width={'full'} height={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
      <Box width={'full'} height={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.500'} color={'white'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box width={'full'} height={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOptions}>
          Virtual Reality
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
