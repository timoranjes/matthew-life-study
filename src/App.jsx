import { Container, VStack, SimpleGrid, Box, Text, Button, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaRocket, FaUsers, FaMobileAlt } from 'react-icons/fa'
import Header from './components/Header'
import ProgressCard from './components/ProgressCard'
import StudyCard from './components/StudyCard'
import NotesSection from './components/NotesSection'
import StudyPlan from './components/StudyPlan'
import Achievements from './components/Achievements'

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        {/* 頁頭 */}
        <Header />
        
        {/* 主要內容 */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={8}>
          {/* 左欄 */}
          <VStack spacing={8}>
            <ProgressCard />
            <StudyPlan />
            <Achievements />
          </VStack>
          
          {/* 右欄 */}
          <VStack spacing={8}>
            <StudyCard />
            <NotesSection />
          </VStack>
        </SimpleGrid>
        
        {/* 功能介紹 */}
        <Box 
          bg="white" 
          p={8} 
          borderRadius="xl" 
          boxShadow="xl" 
          mb={8}
          border="1px solid"
          borderColor="gray.200"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center" color="brand.600">
            🚀 專為青少年設計的特色功能
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            <FeatureCard
              icon={FaMobileAlt}
              title="響應式設計"
              description="完美適配手機、平板、電腦，隨時隨地追求"
              color="blue.500"
            />
            <FeatureCard
              icon={FaUsers}
              title="小組互動"
              description="與同伴分享亮光，彼此鼓勵追求"
              color="green.500"
            />
            <FeatureCard
              icon={FaRocket}
              title="遊戲化學習"
              description="進度追蹤、成就徽章，讓追求更有趣"
              color="purple.500"
            />
            <FeatureCard
              icon={FaGithub}
              title="完全免費"
              description="開源項目，無廣告、無訂閱費用"
              color="orange.500"
            />
          </SimpleGrid>
        </Box>
        
        {/* 頁尾 */}
        <Box 
          textAlign="center" 
          py={8} 
          borderTop="1px solid" 
          borderColor="gray.200"
        >
          <Text color="gray.600" mb={4}>
            📖 馬太福音生命讀經青少年追求項目
          </Text>
          <Text fontSize="sm" color="gray.500" mb={6}>
            專為香港召會中二學生設計 · 每週半篇生命讀經 · 繁體中文界面
          </Text>
          
          <HStack spacing={4} justify="center" mb={6}>
            <Button colorScheme="brand" size="lg">
              立即開始追求
            </Button>
            <Button variant="outline" size="lg">
              了解更多
            </Button>
            <Button variant="ghost" size="lg" leftIcon={<FaGithub />}>
              查看源碼
            </Button>
          </HStack>
          
          <Text fontSize="xs" color="gray.400">
            © 2025 馬太福音生命讀經青少年追求 · 技術棧：React + Chakra UI + Supabase + Vercel
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

const FeatureCard = ({ icon, title, description, color }) => (
  <Box 
    p={6} 
    bg="white" 
    borderRadius="lg" 
    border="1px solid" 
    borderColor="gray.200"
    textAlign="center"
    _hover={{ 
      transform: 'translateY(-4px)', 
      boxShadow: 'xl',
      borderColor: color 
    }}
    transition="all 0.3s"
  >
    <Icon as={icon} boxSize={10} color={color} mb={4} />
    <Text fontWeight="bold" fontSize="lg" mb={2} color="gray.800">
      {title}
    </Text>
    <Text color="gray.600" fontSize="sm">
      {description}
    </Text>
  </Box>
)

export default App