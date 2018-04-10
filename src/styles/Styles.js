const fontFamily = "sans-serif";
const padding = "10px 10px";
const none = "none";
const width100 = "100%";
const inlineBlock = "inline-block";

export const styles = {
	header: 
	{
  	fontFamily: fontFamily,
  	backgroundColor: "#033922",
  	padding: padding,
  	paddingBottom: 20,
 	 	margin: 0,
 	 	border: "1px solid #CBE6DA"
  },
  navLink:
  {
  	padding: padding,
  	color: "#BCE5D4",
  },
  section:
  {
  	padding: padding,
  	backgroundColor: "#6E7F78",
 	 	color: "#CEF1E1"
  },
  h1:
  {
  	color: "#CBE6DA",
  	margin: 0,
  	padding: padding,
  },
  h2:
  {
  	color: "#58786A",
  	fontSize: ".9em",
  	margin: 0,
  	padding: "0 0 20px 20px",
  },
  h4: 
  {
  	margin: 0,
  	padding: padding,
  	textTransform: "uppercase"
  },
  ul:
  {
  	margin:0,
  	padding: padding,
  	width: 400,
  	listStyleType: none
  },
  li:
  {
  	listStylePosition: "inside",
  	borderBottom: "1px solid #E5F3ED",
  	marginBottom: 10
  },
  liLink:
  {
  	display: inlineBlock,
  	paddingLeft: 10,
  	paddingBottom: 10,
  	textDecoration: none,
  	color: "#E7F3EE",
  	width: width100
  },
  liSpan:
  {
  	fontSize: ".8em",
  	display: inlineBlock,
  	color: "#0A3724",
  	width: 80,
  	textAlign: "center",
  	float: "right"
  },
  detailLi:
  {
   	listStylePosition: "inside",
   	borderBottom: "1px solid #E5F3ED",
   	marginBottom: 10
 },
  keySpan:
  {
  	fontSize: ".8em",
  	display: inlineBlock,
  	width: 100,
  	marginBottom: 10,
  	verticalAlign: "top"
  },
  valueSpan:
  {
  	fontSize: "1em",
  	display: inlineBlock,
  	color: "#0A3724",
  	width: 300,
  	textAlign: "left",
  	marginBottom: 10,
  	verticalAlign: "middle"

  },
  spanUl:
  {
  	margin:0,
  	padding: 0,
  	width: width100,
  	listStyleType: none
  },
  spanLi:
  {
  },
  spanLiLink:
  {
  	display: inlineBlock,
  	textDecoration: none,
  	color: "#E7F3EE",
  	fontSize: ".9em",
  	width: width100
  },
 };