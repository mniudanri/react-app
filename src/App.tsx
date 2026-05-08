import { useState } from "react";
import {
  AppShell,
  Burger,
  Card,
  Grid,
  Group,
  Image,
  Input,
  Text,
  Title,
  Button,
  Stack,
  Box,
} from "@mantine/core";
import { categories } from "./mocks/categories"

import { products } from "./mocks/products";

export default function App() {
  const [opened, setOpened] = useState(true);

  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{
        width: opened ? 260 : 90,
        breakpoint: "sm",
        collapsed: {
          mobile: !opened,
        },
      }}
    >
      {/* page header */}
      <AppShell.Header px="md">
        <Group h="100%" align="center">
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
          />

          <Title order={3}>Shoply.</Title>
        </Group>
      </AppShell.Header>

      {/* left sidebar */}
      <AppShell.Navbar p="md">
      <Stack gap="sm">
        {categories.map((category, index) => (
          <Text
            key={category}
            fw={index === 0 ? 600 : 400}
            size="sm"
            style={{
              cursor: "pointer",
              padding: "8px 0",
            }}
          >
            {opened ? category : ""}
          </Text>
        ))}
      </Stack>
      </AppShell.Navbar>

      {/* main content */}
      <AppShell.Main>
        <Group justify="space-between" mb="xl">
          <Title order={2}>Shopping Catalog</Title>

          <Input
            placeholder="Search products..."
            w={{ base: "100%", sm: 300 }}
          />
        </Group>

        {/* hot products */}
        <Card radius="xl" shadow="sm" p="xl" mb="xl">
          <Box>
            <Title order={1}>New Season New Style</Title>

            <Text c="dimmed" mt="sm">
              Discover trending fashion and premium collections.
            </Text>

            <Button mt="md" radius="xl">
              Shop Now
            </Button>
          </Box>
        </Card>

        {/* product listing */}
        <Grid>
          {products.map((product) => (
            <Grid.Col
              key={product.id}
              span={{ base: 12, sm: 6, md: 3 }}
            >
              <Card shadow="sm" radius="xl" p="md">
              <Card.Section>
                <Image
                  src={product.image}
                  alt={product.title}
                  radius="md"
                  fit="contain"
                  h={{ base: 180, sm: 220 }}
                />
              </Card.Section>

                <Title order={5} mt="md">
                  {product.title}
                </Title>

                <Text c="dimmed">{product.price}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}