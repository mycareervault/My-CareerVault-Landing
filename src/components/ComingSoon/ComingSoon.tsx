import { Card, Container, Title, Text } from '@mantine/core';

export function ComingSoon() {
  return (
    <Container size="lg" mb={60}>
      <Card 
        shadow="md" 
        radius="md" 
        px={{ base: 20, sm: 40, md: 60, lg: 100 }} 
        py={{ base: 40, sm: 60, md: 80, lg: 100 }} 
        style={{ backgroundColor: '#EDF0FF'}}
      >
        <Title 
          order={2} 
          size="2.5rem"
          fw={700} 
          mb="md" 
          ta="center" 
          style={{ 
            color: '#17214C',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
          }}
        >
          MyCareerVault is launching soon
        </Title>
        
        <Text 
          size="md"
          mb="xl" 
          opacity={0.8} 
          c="gray.7" 
          ta="center"
          style={{ 
            lineHeight: 1.6,
            fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
          }}
        >
          Be among the first to experience the future of career document management
        </Text>
      </Card>
    </Container>
  );
}
