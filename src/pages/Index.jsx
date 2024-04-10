import React from "react";
import { Box, Flex, Heading, Text, Button, Icon, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, useColorModeValue, Image } from "@chakra-ui/react";
import { FaChartBar, FaRegUser, FaShoppingCart, FaCog } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box p={8}>
      <Heading mb={4}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {/* Statistic Cards */}
        <StatCard icon={FaChartBar} title="Sales" stat="1,897" change="+5.4%" />
        <StatCard icon={FaRegUser} title="Customers" stat="985" change="-3.1%" />
        <StatCard icon={FaShoppingCart} title="Orders" stat="254" change="+8.2%" />
        <StatCard icon={FaCog} title="Settings" stat="18" change="+2.7%" />
      </SimpleGrid>

      {/* Main Content */}
      <Flex mt={10} direction={{ base: "column", md: "row" }} spacing={10}>
        {/* Chart */}
        <Box flex={1} bg={cardBg} p={5} borderRadius="md" shadow="md">
          <Text mb={2} fontSize="xl" fontWeight="semibold">
            Sales Over Time
          </Text>
          {/* Placeholder for chart */}
          <Box h="200px" bg="gray.200" borderRadius="md"></Box>
        </Box>

        {/* Recent Orders */}
        <VStack flex={1} spacing={5} ml={{ md: 10 }} mt={{ base: 10, md: 0 }}>
          <Box bg={cardBg} p={5} borderRadius="md" shadow="md" w="full">
            <Text mb={2} fontSize="xl" fontWeight="semibold">
              Recent Orders
            </Text>
            {/* Placeholder for orders list */}
            <Box h="200px" bg="gray.200" borderRadius="md"></Box>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

const StatCard = ({ icon, title, stat, change }) => {
  const iconColor = useColorModeValue("blue.500", "blue.300");
  const statColor = change.startsWith("+") ? "green.400" : "red.400";

  return (
    <Stat p={5} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
      <Flex justifyContent="space-between">
        <Box>
          <StatLabel fontWeight="medium">{title}</StatLabel>
          <StatNumber fontSize="2xl" fontWeight="semibold">
            {stat}
          </StatNumber>
          <StatHelpText>
            <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} color={statColor} />
            {change}
          </StatHelpText>
        </Box>
        <Box my="auto">
          <Icon as={icon} w={10} h={10} color={iconColor} />
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
