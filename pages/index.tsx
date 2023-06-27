import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import Link from 'next/link';
import {
  Button,
  Center,
  chakra,
  Divider,
  Heading,
  HStack,
  // Link,
  // Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im';

const CustomImage = chakra(NextImage, {
  baseStyle: {
    borderRadius: 'lg',
    boxShadow: 'lg',
  },
  shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title='Home'
      description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
    >
      <Stack
        spacing={4}
        py={12}
        align='center'
        h='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align='start'
          w={{ base: '100%', md: '50%' }}
          py={{ base: 20, md: 0 }}
        >
          <Heading as='h1'>Welcome</Heading>
          <Heading as='h2' size='lg'>
            Next - TodoApp
          </Heading>
          <Divider />

          <Text color='gray.500' align='justify'>
            <Trans i18nKey='excerpt'>
              Built with{' '}
              <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink>
              {' and '}
              <ExternalLink href='https://chakra-ui.com/'>
                Chakra UI
              </ExternalLink>
            </Trans>
          </Text>

          <Text color='gray.500' align='justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, neque dolorem non quod eos et libero quae ipsa sint
            saepe voluptas commodi quisquam in repellat labore, veniam
            dignissimos placeat architecto.
          </Text>
          <HStack
            spacing={4}
            w='full'
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Link href='todos'>
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<ImArrowRight2 />}
              >
                Go to App
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          <CustomImage
            src='/assets/images/home.jpg'
            width={300}
            height={500}
            alt='Cover Image'
          />
        </Center>
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
