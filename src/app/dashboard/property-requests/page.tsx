import { Box, Container } from "@mui/material";

import { List } from "./list";

export default function Page() {
  return (
    <div className="w-full">
      <Container>
        <Box>
          <List />
        </Box>
      </Container>
    </div>
  );
}
