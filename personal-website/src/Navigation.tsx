import { Box, Container, Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';
import HomeContent from './content/homeContent';
import AboutMeContent from './content/aboutMeContent';

export default function Navigation() {
    return (
        <Container>
            <Box>
                <Tabs defaultValue="home" inverted>
                <Tabs.List>
                    <Tabs.Tab value="home" leftSection={<IconPhoto size={12} />}>
                        Home
                    </Tabs.Tab>
                    <Tabs.Tab value="aboutme" leftSection={<IconMessageCircle size={12} />}>
                        About Me
                    </Tabs.Tab>
                </Tabs.List>
            
                <Tabs.Panel value="home">
                    <HomeContent />
                </Tabs.Panel>
                <Tabs.Panel value="aboutme">
                    <AboutMeContent />
                </Tabs.Panel>
                </Tabs>
            </Box>
        </Container>
      );
}