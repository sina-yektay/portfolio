import { PageWrapper } from "@/components/PageWrapper";
import { memo } from "react";

type NovacoopProps = {};

const Novacoop = memo(({}: NovacoopProps) => {
  return <PageWrapper>
    <h3>novacoop</h3>
  </PageWrapper>
});

Novacoop.displayName = "Novacoop";
export default Novacoop;
