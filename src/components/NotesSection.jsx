import { 
  Card, CardBody, CardHeader, Heading, Text, VStack, 
  HStack, Box, Textarea, Button, Tag, TagLabel, 
  TagLeftIcon, Divider, Flex, Icon, Avatar, AvatarGroup
} from '@chakra-ui/react'
import { 
  FaPen, FaShare, FaHistory, FaHeart, 
  FaComment, FaUserFriends, FaTag 
} from 'react-icons/fa'
import { useState } from 'react'
import { userProgress, groupShares } from '../data/studyContent'

const NotesSection = () => {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState(userProgress.notes)
  
  const handleSaveNote = () => {
    if (note.trim()) {
      const newNote = {
        id: notes.length + 1,
        weekId: 4,
        content: note,
        date: new Date().toISOString().split('T')[0],
        tags: ['新筆記']
      }
      setNotes([newNote, ...notes])
      setNote('')
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <Heading size="md">✍️ 我的筆記與分享</Heading>
        <Text color="gray.600" fontSize="sm">記錄你的亮光、心得與應用</Text>
      </CardHeader>
      
      <CardBody>
        <VStack spacing={6} align="stretch">
          {/* 新增筆記 */}
          <Box>
            <Text mb={2} fontWeight="medium">寫下本週的亮光：</Text>
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="今天讀經有什麼亮光？如何應用在生活中？..."
              minH="120px"
              resize="vertical"
              mb={3}
            />
            <Flex justify="space-between" align="center">
              <HStack spacing={2}>
                <Tag size="sm" colorScheme="blue">
                  <TagLeftIcon as={FaTag} />
                  <TagLabel>亮光</TagLabel>
                </Tag>
                <Tag size="sm" colorScheme="green">
                  <TagLeftIcon as={FaTag} />
                  <TagLabel>應用</TagLabel>
                </Tag>
                <Tag size="sm" colorScheme="purple">
                  <TagLeftIcon as={FaTag} />
                  <TagLabel>問題</TagLabel>
                </Tag>
              </HStack>
              <HStack>
                <Button 
                  variant="outline" 
                  size="sm" 
                  leftIcon={<FaHistory />}
                >
                  查看歷史
                </Button>
                <Button 
                  colorScheme="brand" 
                  size="sm" 
                  leftIcon={<FaPen />}
                  onClick={handleSaveNote}
                  isDisabled={!note.trim()}
                >
                  儲存筆記
                </Button>
              </HStack>
            </Flex>
          </Box>
          
          <Divider />
          
          {/* 我的筆記列表 */}
          <Box>
            <HStack justify="space-between" mb={4}>
              <Heading size="sm">📝 我的筆記 ({notes.length})</Heading>
              <Button variant="ghost" size="sm" rightIcon={<FaShare />}>
                分享全部
              </Button>
            </HStack>
            
            <VStack spacing={4} align="stretch">
              {notes.map((noteItem) => (
                <NoteItem key={noteItem.id} note={noteItem} />
              ))}
            </VStack>
          </Box>
          
          <Divider />
          
          {/* 小組分享 */}
          <Box>
            <HStack justify="space-between" mb={4}>
              <Heading size="sm">
                <Icon as={FaUserFriends} mr={2} />
                小組分享牆
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {groupShares.length} 則分享
              </Text>
            </HStack>
            
            <VStack spacing={4} align="stretch">
              {groupShares.map((share) => (
                <ShareItem key={share.id} share={share} />
              ))}
            </VStack>
            
            <Button 
              variant="outline" 
              w="full" 
              mt={4}
              leftIcon={<FaComment />}
            >
              查看所有分享
            </Button>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  )
}

const NoteItem = ({ note }) => (
  <Box 
    p={4} 
    bg="gray.50" 
    borderRadius="lg" 
    border="1px solid" 
    borderColor="gray.200"
    _hover={{ borderColor: 'brand.300', bg: 'brand.50' }}
    transition="all 0.2s"
  >
    <Text mb={2}>{note.content}</Text>
    <Flex justify="space-between" align="center" fontSize="sm">
      <HStack spacing={2}>
        {note.tags.map((tag, index) => (
          <Tag key={index} size="sm" variant="subtle" colorScheme="blue">
            {tag}
          </Tag>
        ))}
      </HStack>
      <Text color="gray.500">{note.date}</Text>
    </Flex>
  </Box>
)

const ShareItem = ({ share }) => (
  <Box 
    p={4} 
    bg="white" 
    borderRadius="lg" 
    border="1px solid" 
    borderColor="gray.200"
    boxShadow="sm"
  >
    <Flex align="start" mb={3}>
      <Avatar size="sm" name={share.user} mr={3}>
        {share.avatar}
      </Avatar>
      <Box flex={1}>
        <Flex justify="space-between" align="center" mb={1}>
          <Text fontWeight="bold">{share.user}</Text>
          <Text fontSize="xs" color="gray.500">第{share.week}週</Text>
        </Flex>
        <Text color="gray.600" fontSize="sm">{share.content}</Text>
      </Box>
    </Flex>
    
    <Flex justify="space-between" align="center" fontSize="sm">
      <HStack spacing={4}>
        <Button variant="ghost" size="xs" leftIcon={<FaHeart />}>
          {share.likes}
        </Button>
        <Button variant="ghost" size="xs" leftIcon={<FaComment />}>
          回應
        </Button>
      </HStack>
      <Text color="gray.500" fontSize="xs">{share.date}</Text>
    </Flex>
  </Box>
)

export default NotesSection