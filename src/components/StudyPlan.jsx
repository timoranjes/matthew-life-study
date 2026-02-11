import { 
  Card, CardBody, CardHeader, Heading, Text, VStack, 
  HStack, Box, SimpleGrid, Badge, Icon, Progress 
} from '@chakra-ui/react'
import { FaCalendar, FaCheck, FaClock, FaBook } from 'react-icons/fa'
import { studyWeeks } from '../data/studyContent'

const StudyPlan = () => {
  const completedCount = studyWeeks.filter(w => w.completed).length
  const totalWeeks = studyWeeks.length
  
  return (
    <Card>
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md">
            <Icon as={FaCalendar} mr={2} />
            📅 追求計劃表
          </Heading>
          <Badge colorScheme="blue" fontSize="md">
            {completedCount}/{totalWeeks} 週
          </Badge>
        </HStack>
      </CardHeader>
      
      <CardBody>
        <VStack spacing={4} align="stretch">
          {/* 總進度 */}
          <Box>
            <HStack justify="space-between" mb={2}>
              <Text fontSize="sm" color="gray.600">總進度</Text>
              <Text fontSize="sm" fontWeight="bold" color="brand.600">
                {Math.round((completedCount / totalWeeks) * 100)}%
              </Text>
            </HStack>
            <Progress 
              value={(completedCount / totalWeeks) * 100} 
              size="sm" 
              colorScheme="brand" 
              borderRadius="full"
            />
          </Box>
          
          {/* 週次列表 */}
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
            {studyWeeks.map((week) => (
              <WeekCard key={week.id} week={week} />
            ))}
          </SimpleGrid>
          
          {/* 統計信息 */}
          <Box 
            p={4} 
            bg="brand.50" 
            borderRadius="lg" 
            border="1px solid" 
            borderColor="brand.200"
          >
            <SimpleGrid columns={2} spacing={4}>
              <StatItem 
                icon={FaCheck}
                label="已完成"
                value={`${completedCount}週`}
                color="green.500"
              />
              <StatItem 
                icon={FaClock}
                label="進行中"
                value="1週"
                color="blue.500"
              />
              <StatItem 
                icon={FaBook}
                label="待完成"
                value={`${totalWeeks - completedCount - 1}週`}
                color="gray.500"
              />
              <StatItem 
                icon={FaCalendar}
                label="總週數"
                value={`${totalWeeks}週`}
                color="purple.500"
              />
            </SimpleGrid>
          </Box>
          
          <Text fontSize="sm" color="gray.600" textAlign="center">
            💡 每週完成半篇生命讀經，預計{totalWeeks}週完成馬太福音
          </Text>
        </VStack>
      </CardBody>
    </Card>
  )
}

const WeekCard = ({ week }) => (
  <Box
    p={4}
    border="2px solid"
    borderColor={week.current ? "brand.500" : week.completed ? "green.300" : "gray.200"}
    borderRadius="lg"
    bg={week.current ? "brand.50" : week.completed ? "green.50" : "white"}
    cursor="pointer"
    _hover={{ 
      transform: 'translateY(-2px)', 
      boxShadow: 'md',
      borderColor: week.current ? "brand.600" : "brand.400"
    }}
    transition="all 0.2s"
  >
    <HStack justify="space-between" mb={2}>
      <Badge 
        colorScheme={week.current ? "blue" : week.completed ? "green" : "gray"}
        fontSize="sm"
      >
        第{week.week}週
      </Badge>
      {week.completed && <Icon as={FaCheck} color="green.500" />}
      {week.current && <Icon as={FaClock} color="blue.500" />}
    </HStack>
    
    <Text fontWeight="medium" fontSize="sm" mb={1} color="gray.800">
      {week.title}
    </Text>
    <Text fontSize="xs" color="gray.600">
      {week.scripture}
    </Text>
    
    {week.current && (
      <Badge 
        colorScheme="blue" 
        variant="subtle" 
        fontSize="xs" 
        mt={2}
        px={2}
        py={1}
      >
        本週進行中
      </Badge>
    )}
  </Box>
)

const StatItem = ({ icon, label, value, color }) => (
  <HStack>
    <Icon as={icon} color={color} />
    <Box>
      <Text fontSize="xs" color="gray.600">{label}</Text>
      <Text fontSize="lg" fontWeight="bold">{value}</Text>
    </Box>
  </HStack>
)

export default StudyPlan