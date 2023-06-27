import PageLayout from '@/components/page-layout';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsPencil, BsPlusLg, BsTrash } from 'react-icons/bs';

const today = new Date().toLocaleDateString('id-ID');

const IndexPage = () => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const {
    isOpen: isOpenDialog,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useDisclosure();

  const [modalTitle, setModalTitle] = useState(null);
  const initialRef = useRef(null);
  const cancelRef = useRef();

  const onAdd = () => {
    setModalTitle('Add New Task');
    onOpenModal();
  };

  const onEdit = () => {
    setModalTitle('Edit Task');
    onOpenModal();
  };

  const onDelete = () => {
    onOpenDialog()
  }

  return (
    <>
      <PageLayout title='Todos' description='Todos App Here!'>
        <Container maxW='container.sm' mt='2%'>
          <Stack>
            <Heading as='h1' size='xl' textAlign='center'>
              Todo List App
            </Heading>
          </Stack>
          <Flex mt='6%' alignItems='center' justifyContent='space-between'>
            <Text fontSize={'18px'} fontWeight={'semibold'}>
              Date : {today}
            </Text>
            <Button rightIcon={<BsPlusLg />} onClick={onAdd}>
              Add New Task
            </Button>
          </Flex>
          <Divider mt='4' mb='4' borderColor='darkgray' />
          <Stack>
            <Table size='sm' w='100%'>
              <Thead bgColor='gray.300'>
                <Tr>
                  <Th pt='12px' pb='12px'>
                    Task
                  </Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam eligendi dolorum illo dolores dicta vel, magnam
                    accusantium, iste alias beatae, reiciendis odio saepe dolore
                    ullam?
                  </Td>
                  <Td>
                    <HStack>
                      <Box
                        cursor={'pointer'}
                        bgColor='blue.100'
                        p={'4px'}
                        borderRadius='4px'
                        onClick={onEdit}
                      >
                        <BsPencil />
                      </Box>
                      <Box
                        cursor={'pointer'}
                        bgColor='red.100'
                        p={'4px'}
                        borderRadius='4px'
                        onClick={onDelete}
                      >
                        <BsTrash />
                      </Box>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Stack>
        </Container>
      </PageLayout>
      <Modal
        isOpen={isOpenModal}
        onClose={onCloseModal}
        initialFocusRef={initialRef}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input ref={initialRef} placeholder='Input task name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blackAlpha' mr={'3'}>
              Save
            </Button>
            <Button variant='ghost' onClick={onCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onCloseDialog}
        isOpen={isOpenDialog}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete Task</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this task?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCloseDialog}>
              No
            </Button>
            <Button colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default IndexPage;
