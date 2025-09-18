import { IconFlame, IconFileCode, IconReceiptOff, IconLock, IconBrain, IconTimeline, IconShare } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
  Button,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const painPoints = [
  {
    title: 'Document Chaos',
    description: 'Struggling to find old offer letters, salary slips, or certificates when needed?',
    icon: IconFileCode,
  },
  {
    title: 'Security Concerns',
    description: 'Sharing sensitive documents over email feels unsafe and unprofessional.',
    icon: IconLock,
  },
  {
    title: 'Stressful Applications',
    description: 'Job applications and background checks become stressful when documents are scattered.',
    icon: IconFlame,
  },
  {
    title: 'No Growth Tracking',
    description: 'No easy way to track your career growth with proof and documentation.',
    icon: IconTimeline,
  }
];

const solutions = [
  {
    title: 'Secure & Encrypted Storage',
    description: 'Bank-level encryption for all your documents with military-grade security protocols.',
    icon: IconLock,
  },
  {
    title: 'AI-Powered Organization',
    description: 'AI automatically detects and categorizes offer letters, payslips, IDs, resumes — no manual sorting needed.',
    icon: IconBrain,
  },
  {
    title: 'Career Timeline',
    description: 'Build your entire career journey with attached documents and achievements.',
    icon: IconTimeline,
  },
  {
    title: 'One-Click Sharing',
    description: 'Share documents or full packages with recruiters, HR, or banks securely.',
    icon: IconShare,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  
  const painPointCards = painPoints.map((point) => (
    <Card key={point.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <point.icon size={50} stroke={1.5} color={theme.colors.secondary[0]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {point.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {point.description}
      </Text>
    </Card>
  ));

  const solutionCards = solutions.map((solution) => (
    <Card key={solution.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <solution.icon size={50} stroke={1.5} color={theme.colors.primary[0]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {solution.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {solution.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg" color="secondary">
          Common Challenges
        </Badge>
      </Group>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Tired of Managing Documents Manually?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        From lost offer letters to scattered payslips, managing career documents by hand is stressful, insecure, and time-consuming.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl" mt={50}>
        {painPointCards}
      </SimpleGrid>
      
      {/* Internal Divider */}
      <div style={{ 
        width: '100%', 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent 0%, var(--mantine-color-primary-0) 50%, transparent 100%)',
        margin: '60px auto',
        maxWidth: '800px'
      }} />
      
      <Group justify="center" mt={60}>
        <Badge variant="filled" size="lg" color="primary">
          How MyCareerVault Helps
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        AI-Powered Solutions for Modern Professionals
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Automatically classify, secure, and gain insights from your career documents with the power of AI — all in one secure vault.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl" mt={50}>
        {solutionCards}
      </SimpleGrid>
    </Container>
  );
}