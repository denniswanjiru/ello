import { Box, Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";

import Header from "./components/header";
import TabPanel from "./components/tab-panel";
import AllBooks from "./pages/all-books";
import ReadingList from "./pages/reading-list";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box bgcolor="theme.background.main" minHeight="100vh">
      <Container maxWidth="xl">
        <Header />

        <Box component="main" paddingTop={7}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="All Books" />
              <Tab label="Reading list" />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <AllBooks />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <ReadingList />
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
