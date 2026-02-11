import { 
  Card, CardBody, CardHeader, Heading, Text, VStack, 
  HStack, Box, SimpleGrid, Badge, Icon, Progress, 
  Tooltip, Flex 
} from '@chakra-ui/react'
import { FaTrophy, FaStar, FaAward, FaMedal, FaLock, FaUnlock } from 'react-icons/fa'
import { achievements } from '../data/studyContent'

const Achievements = () => {
  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalAchievements = achievements.length
  
  return (
    <Card>
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Heading size="md">
            <Icon as={FaTrophy} mr={2} />
            🏆 成就系統
          </Heading>
          <Badge colorScheme="yellow" fontSize="md">
            {unlockedCount}/{totalAchievements}
          </Badge>
        </HStack>
      </CardHeader>
      
      <CardBody>
        <VStack spacing={4} align="stretch">
          {/* 成就進度 */}
          <Box>
            <HStack justify="space-between" mb={2}>
              <Text fontSize="sm" color="gray.600">成就解鎖進度</Text>
              <Text fontSize="sm" fontWeight="bold" color="yellow.600">
                {Math.round((unlockedCount / totalAchievements) * 100)}%
              </Text>
            </HStack>
            <Progress 
              value={(unlockedCount / totalAchievements) * 100} 
              size="sm" 
              colorScheme="yellow" 
              borderRadius="full"
            />
          </Box>
          
          {/* 成就列表 */}
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </SimpleGrid>
          
          {/* 激勵訊息 */}
          <Box 
            p={4} 
            bg="yellow.50" 
            borderRadius="lg" 
            border="1px solid" 
            borderColor="yellow.200"
            textAlign="center"
          >
            <Text fontWeight="medium" color="yellow.700" mb={2}>
              🎯 繼續追求，解鎖更多成就！
            </Text>
            <Text fontSize="sm" color="yellow.600">
              還有{totalAchievements - unlockedCount}個成就等待解鎖
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  )
}

const AchievementCard = ({ achievement }) => (
  <Tooltip 
    label={achievement.description} 
    placement="top" 
    hasArrow
    bg="gray.800"
    color="white"
  >
    <Box
      p={4}
      border="2px solid"
      borderColor={achievement.unlocked ? "yellow.400" : "gray.200"}
      borderRadius="lg"
      bg={achievement.unlocked ? "yellow.50" : "gray.50"}
      opacity={achievement.unlocked ? 1 : 0.7}
      cursor="pointer"
      _hover={{ 
        transform: 'translateY(-2px)', 
        boxShadow: 'md',
        borderColor: achievement.unlocked ? "yellow.500" : "gray.300"
      }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Box fontSize="2xl">{achievement.icon}</Box>
        {achievement.unlocked ? (
          <Icon as={FaUnlock} color="green.500" />
        ) : (
          <Icon as={FaLock} color="gray.400" />
        )}
      </Flex>
      
      <Text fontWeight="bold" fontSize="sm" mb={1} color="gray.800">
        {achievement.name}
      </Text>
      
      {achievement.unlocked ? (
        <Text fontSize="xs" color="green.600">
          ✓ 已於 {achievement.date} 解鎖
        </Text>
      ) : achievement.progress ? (
        <Box>
          <Text fontSize="xs" color="gray.600" mb={1}>
            進度：{achievement.progress}/{achievement.target}
          </Text>
          <Progress 
            value={(achievement.progress / achievement.target) * 100} 
            size="xs" 
            colorScheme="yellow" 
            borderRadius="full"
          />
        </Box>
      ) : (
        <Text fontSize="xs" color="gray.500">
          尚未解鎖
        </Text>
      )}
    </Box>
  </Tooltip>
)

export default Achievements