import { 
  Card, CardBody, CardHeader, Heading, Text, VStack, 
  HStack, Box, Icon, Button, Badge, Accordion,
  AccordionItem, AccordionButton, AccordionPanel,
  AccordionIcon, List, ListItem, ListIcon, Divider
} from '@chakra-ui/react'
import { 
  FaBookOpen, FaQuestionCircle, FaLightbulb, 
  FaQuoteRight, FaShareAlt, FaVolumeUp 
} from 'react-icons/fa'
import { studyWeeks } from '../data/studyContent'

const StudyCard = () => {
  const currentStudy = studyWeeks.find(w => w.current) || studyWeeks[3]
  
  return (
    <Card>
      <CardHeader>
        <HStack justify="space-between" align="center">
          <Box>
            <Heading size="md">📚 本週讀經內容</Heading>
            <Text color="gray.600" fontSize="sm">{currentStudy.duration} · {currentStudy.scripture}</Text>
          </Box>
          <Badge colorScheme="green" fontSize="md" px={3} py={1}>
            進行中
          </Badge>
        </HStack>
      </CardHeader>
      
      <CardBody>
        <VStack spacing={6} align="stretch">
          {/* 生命讀經要點 */}
          <Section 
            icon={FaLightbulb}
            title="💡 生命讀經要點"
            color="yellow.500"
          >
            <List spacing={3}>
              {currentStudy.content.highlights.map((point, index) => (
                <ListItem key={index} display="flex" alignItems="start">
                  <Box 
                    as="span" 
                    color="yellow.500" 
                    fontWeight="bold" 
                    mr={3}
                    mt={1}
                  >
                    •
                  </Box>
                  <Text>{point}</Text>
                </ListItem>
              ))}
            </List>
          </Section>
          
          {/* 思考問題 */}
          <Section 
            icon={FaQuestionCircle}
            title="❓ 思考問題"
            color="blue.500"
          >
            <List spacing={3}>
              {currentStudy.content.questions.map((question, index) => (
                <ListItem key={index} display="flex" alignItems="start">
                  <Text fontWeight="medium" color="gray.700" mr={2}>
                    {index + 1}.
                  </Text>
                  <Text>{question}</Text>
                </ListItem>
              ))}
            </List>
          </Section>
          
          {/* 恢復本經文 */}
          <Section 
            icon={FaBookOpen}
            title="📖 恢復本經文對照"
            color="green.500"
          >
            <Box 
              p={4} 
              bg="green.50" 
              borderRadius="lg" 
              borderLeft="4px solid" 
              borderColor="green.400"
            >
              <Text fontStyle="italic" color="gray.700" mb={2}>
                {currentStudy.content.recoveryVersion}
              </Text>
              <Text fontSize="sm" color="gray.600">
                建議對照閱讀恢復本聖經，更深入理解經文原意
              </Text>
            </Box>
          </Section>
          
          {/* 應用提醒 */}
          <Section 
            icon={FaQuoteRight}
            title="🎯 本週應用"
            color="purple.500"
          >
            <Text color="gray.700">{currentStudy.content.application}</Text>
          </Section>
          
          <Divider />
          
          {/* 行動按鈕 */}
          <HStack spacing={4} justify="center" pt={2}>
            <Button 
              colorScheme="brand" 
              leftIcon={<FaBookOpen />}
              size="lg"
              flex={1}
            >
              開始閱讀本篇
            </Button>
            <Button 
              variant="outline" 
              leftIcon={<FaVolumeUp />}
              size="lg"
              flex={1}
            >
              聆聽講解
            </Button>
          </HStack>
          
          <HStack spacing={4} justify="center">
            <Button 
              variant="ghost" 
              leftIcon={<FaShareAlt />}
              size="sm"
            >
              分享亮光
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
            >
              下載本週內容
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

const Section = ({ icon, title, color, children }) => (
  <Box>
    <HStack mb={3}>
      <Icon as={icon} color={color} />
      <Heading size="sm" color="gray.700">{title}</Heading>
    </HStack>
    {children}
  </Box>
)

export default StudyCard