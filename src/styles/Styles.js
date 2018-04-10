const fontFamily = "sans-serif";
const padding = "10px 10px";
const none = "none";
const width100 = "100%";
const inlineBlock = "inline-block";
const dark = "#033922";
const middle = "#BCE5D4";
const light = "#E7F3EE";
const grey = "#6E7F78";

export const styles = {
	header: 
	{
  	fontFamily: fontFamily,
  	backgroundColor: dark,
  	padding: padding,
  	paddingBottom: 20,
 	 	margin: 0,
 	 	//border: "1px solid #CBE6DA"
  },
  navLink:
  {
  	padding: padding,
  	color: middle,
  },
  section:
  {
  	padding: padding,
  	backgroundColor: grey,
  },
  h1:
  {
  	color: light,
  	margin: 0,
  	padding: padding,
  },
  h2:
  {
  	color: grey,
  	fontSize: ".9em",
  	margin: 0,
  	padding: "0 0 20px 20px",
  },
  h4: 
  {
  	margin: 0,
  	padding: padding,
 	 	color: middle,
  	textTransform: "uppercase"
  },
  label:
  {
  	color: dark,
  	padding: padding,
  	fontSize: ".8em"
  },
  button:
  {
		margin: "0 5px 0 0",
  	padding: 5,
  	border: "1px solid " + middle,
  	background: grey,
  	fontFamily: "inherit",
  	fontSize: ".8em",
  	color: middle,
  	width: 100
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
  	borderBottom: "1px solid " + light,
  	marginBottom: 10
  },
  liLink:
  {
  	display: inlineBlock,
  	paddingLeft: 10,
  	paddingBottom: 10,
  	textDecoration: none,
  	color: light,
  	width: width100
  },
  liSpan:
  {
  	fontSize: ".8em",
  	display: inlineBlock,
  	color: dark,
  	width: 80,
  	textAlign: "center",
  	float: "right"
  },
  detailLi:
  {
   	listStylePosition: "inside",
   	borderBottom: "1px solid " + light,
   	marginBottom: 10
 },
  keySpan:
  {
  	fontSize: ".8em",
  	display: inlineBlock,
  	width: 100,
  	marginBottom: 10,
  	verticalAlign: "top",
  	color: middle
  },
  valueSpan:
  {
  	fontSize: "1em",
  	display: inlineBlock,
  	color: dark,
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
  	color: light,
  	fontSize: ".9em",
  	width: width100
  },
 };