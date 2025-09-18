import { Badge, Container, Group, Text, Title } from '@mantine/core';
import classes from './HeroText.module.css';
import Logo from '../../assets/logo.svg';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size="fluid">
      <div className={classes.inner}>
        <Group justify="center" mb={20}>
          <Badge variant="filled" size="lg" color="primary">
            Coming Soon
          </Badge>
        </Group>
        <img src={Logo} alt="MyCareerVault Logo" className={classes.logo} style={{ marginBottom: '30px' }} />
        <Title className={classes.title}>
          AI-Powered{' '}
          <Text component="span" className={classes.highlight} inherit>
            Career Vault
          </Text>
        </Title>

        <Container p={0} size="sm">
          <Text size="lg" c="dimmed" className={classes.description}>
            Automatically classify, secure, and gain insights from your professional documents.
          </Text>
        </Container>
      </div>
    </Container>
  );
}