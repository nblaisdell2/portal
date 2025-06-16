import React from "react";

type Props = {
  sectionName: string;
  expanded: boolean;
  children: React.ReactNode;
};

function Section({ sectionName, expanded, children }: Props) {
  return (
    <div className="pt-4 pb-8">
      <h2 className="pl-1 text-xl text-[#144463] tracking-wider">
        {sectionName}
      </h2>

      <hr className="pb-4 text-[#144463]" />

      {expanded && <div className="flex flex-wrap">{children}</div>}
    </div>
  );
}

export default Section;
