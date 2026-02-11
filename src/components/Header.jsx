import { Box, Flex, Heading, Text, Icon, HStack, Tag, TagLabel } from '@chakra-ui/react'
import { FaBook, FaUsers, FaCalendarAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <Box 
      bgGradient="linear(to-r, brand.500, secondary.500)" 
      color="white" 
      py={8} 
      px={6}
      borderRadius="xl"
      mb={8}
      boxShadow="2xl"
    >
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Box mb={{ base: 4, md: 0 }}>
          <HStack spacing={3} mb={3}>
            <Icon as={FaBook} boxSize={8} />
            <Heading size="xl">📖 馬太福音生命讀經</Heading>
          </HStack>
          <Text fontSize="lg" opacity={0.9}>
            青少年追求 · 每週半篇 · 免費使用
          </Text>
        </Box>
        
        <HStack spacing={4}>
          <Tag size="lg" colorScheme="yellow" borderRadius="full">
            <TagLabel fontWeight="bold">專為香港中二學生設計</TagLabel>
          </Tag>
          <Tag size="lg" variant="outline" color="white" borderRadius="full">
            <Icon as={FaUsers} mr={2} />
            <TagLabel>小組追求</TagLabel>
          </Tag>
          <Tag size="lg" variant="outline" color="white" borderRadius="full">
            <Icon as={FaCalendarAlt} mr={2} />
            <TagLabel>每週進度</TagLabel>
          </Tag>
        </HStack>
      </Flex>
      
      <Box mt={6} pt={6} borderTop="1px solid rgba(255,255,255,0.2)">
        <Text fontSize="sm" textAlign="center" opacity={0.8}>
          完全免費 · 無廣告 · 開源項目 · 響應式設計
        </Text>
      </Box>
    </Box>
  )
}

export default Header