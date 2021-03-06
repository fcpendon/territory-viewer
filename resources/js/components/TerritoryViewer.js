import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const TerritoryViewer = (props) => {
  const tree = JSON.parse(props.tree);

  const buildChildren = (tree) => {
    return Object.keys(tree).map((key) => {
      const children = tree[key].children ? buildChildren(tree[key].children) : '';

      return (
        <TreeItem key={key} nodeId={key} label={tree[key].name}>
          {children}
        </TreeItem>
      );
    });
  }

  return (
    <Paper style={{ width: 600, margin: '0px auto', padding: 20, justifyContent: "center" }}>
      <Typography variant="h2" color="primary" sx={{ my: 5, textAlign: 'center' }}>
        Territory Viewer
      </Typography>
      <Typography sx={{ mb: 3, textAlign: 'right' }}>
        Hi, {props.user} | <Link href="account/logout">Log Out</Link>
      </Typography>
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        {buildChildren(tree)}
      </TreeView>
    </Paper>
  )
}

export default TerritoryViewer;

if (document.getElementById('territory-viewer')) {  
  const element = document.getElementById('territory-viewer');
  const tree = element.dataset.tree;
  const user = element.dataset.user;

  ReactDOM.render(<TerritoryViewer tree={tree} user={user} />, element);
}
