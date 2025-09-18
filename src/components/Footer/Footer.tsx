import { Container, Text, Group } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={classes.footer}>
      <Container size="lg" py="xl">
        <Group justify="space-between" align="center">
          <div>
            <Text size="sm" c="dimmed">
              © {currentYear} CAREERVAULT SOFTWARE PRIVATE LIMITED. All rights reserved.
            </Text>
          </div>
          <div>
            <Text size="sm" c="dimmed">
              AI-powered document intelligence, built with enterprise-grade security.
            </Text>
          </div>
        </Group>
      </Container>
    </footer>
  );
}
