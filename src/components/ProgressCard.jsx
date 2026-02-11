import { 
  Card, CardBody, CardHeader, Heading, Text, Progress, 
  HStack, VStack, Box, Icon, Flex, Badge, Stat, 
  StatLabel, StatNumber, StatHelpText 
} from '@chakra-ui/react'
import { FaCheck, FaFire, FaCalendarCheck, FaChartLine } from 'react-icons/fa'
import { studyWeeks, userProgress } from '../data/studyContent'

const ProgressCard = () => {
  const currentStudy = studyWeeks.find(w => w.current) || studyWeeks[3]
  const completedCount = studyWeeks.filter(w => w.completed).length
  const totalWeeks = studyWeeks.length
  
  return (
    <Card>
      <CardHeader pb={0}>
        <Heading size="md">📊 我的追求進度</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={6} align="stretch">
          {/* 當前進度 */}
          <Box>
            <Flex justify="space-between" align="center" mb={3}>
              <Box>
                <Heading size="md" color="brand.600">
                  第{userProgress.currentWeek}週 - {currentStudy.title}
                </Heading>
                <Text color="gray.600" fontSize="sm">{currentStudy.scripture}</Text>
              </Box>
              <Badge colorScheme={currentStudy.current ? "green" : "blue"} fontSize="md" px={3} py={1}>
                {currentStudy.current ? "進行中" : "已完成"}
              </Badge>
            </Flex>
            
            <Progress 
              value={userProgress.overallProgress} 
              size="lg" 
              colorScheme="brand" 
              borderRadius="full" 
              mb={2}
            />
            
            <Flex justify="space-between" fontSize="sm" color="gray.600">
              <Text>已完成 {userProgress.overallProgress}%</Text>
              <HStack>
                <Icon as={FaCheck} color="green.500" />
                <Text>已完成 {completedCount}/{totalWeeks} 週</Text>
              </HStack>
            </Flex>
          </Box>
          
          {/* 統計數據 */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            <StatCard 
              icon={FaFire}
              label="連續追求"
              value={`${userProgress.streak}天`}
              color="orange.500"
            />
            <StatCard 
              icon={FaCalendarCheck}
              label="完成週數"
              value={`${completedCount}週`}
              color="green.500"
            />
            <StatCard 
              icon={FaChartLine}
              label="總進度"
              value={`${userProgress.overallProgress}%`}
              color="blue.500"
            />
            <StatCard 
              icon={FaCheck}
              label="筆記數量"
              value={`${userProgress.notes.length}篇`}
              color="purple.500"
            />
          </SimpleGrid>
          
          {/* 激勵訊息 */}
          <Box 
            bg="brand.50" 
            p={4} 
            borderRadius="lg" 
            borderLeft="4px solid" 
            borderColor="brand.500"
          >
            <Text fontWeight="medium" color="brand.700">
              💪 繼續加油！再完成{totalWeeks - completedCount}週就能完成馬太福音生命讀經！
            </Text>
            <Text fontSize="sm" color="gray.600" mt={1}>
              上次讀經：{userProgress.lastStudyDate}
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  )
}

const SimpleGrid = ({ children, columns, spacing }) => (
  <Box 
    display="grid" 
    gridTemplateColumns={{ 
      base: `repeat(${columns.base}, 1fr)`, 
      md: `repeat(${columns.md}, 1fr)` 
    }} 
    gap={spacing}
  >
    {children}
  </Box>
)

const StatCard = ({ icon, label, value, color }) => (
  <Box 
    p={3} 
    bg="white" 
    border="1px solid" 
    borderColor="gray.200" 
    borderRadius="lg"
    textAlign="center"
    _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
    transition="all 0.2s"
  >
    <Icon as={icon} color={color} boxSize={5} mb={2} />
    <Text fontSize="xs" color="gray.600" mb={1}>{label}</Text>
    <Text fontSize="lg" fontWeight="bold" color="gray.800">{value}</Text>
  </Box>
)

export default ProgressCard