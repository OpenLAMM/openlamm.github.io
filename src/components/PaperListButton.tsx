import React from "react";
import Link from '@docusaurus/Link';
import {ArxivPdf, GitHubCode, MachineLearningIcon} from '../icons/index'
interface ILinkButtonProps {
  logo: string;
  text: string;
  link: string;
  use_react_link?: boolean;
}

interface ILinkLogoProps {
  logo: string;
}

interface IPaperListButtonProps {
  arxiv_link: string,
  code_link: string,
  model_zoo_link?: string,
}

const LinkLogo = (props: ILinkLogoProps) => {
  if (props.logo === "arxiv") {
    return (<ArxivPdf/>);
  }
  else if (props.logo === "code") {
    return (<GitHubCode />);
  } 
  else {
    return (<MachineLearningIcon />);
  }
}

const LinkButton = (props: ILinkButtonProps) => {
  return (
    <span className="paper_list_top_icon">
      <Link to={props.link}>
        <LinkLogo logo={props.logo} />
        {props.text}     
      </Link>
    </span>
  );
}


export default function PaperListButton(props: IPaperListButtonProps) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "0.75rem", marginBottom: "0.75arem"}}>
      <div><LinkButton logo='arxiv' text="ArXiv" link={props.arxiv_link} /></div>
      <div style={{paddingLeft: "0.8rem"}}><LinkButton logo="code" text="Code" link={props.code_link} /></div>
      {props.model_zoo_link && (
        <div style={{paddingLeft: "0.8rem"}}><LinkButton logo="model" text="Model Zoo" link={props.model_zoo_link} /></div>
      )}
    </div>
  );
};
