import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import laptop from "../res/macbookpro.png"
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import bootstrapLogo from "../res/bootstrap.png"
import jqueryLogo from "../res/jquery.png"
import nodeLogo from "../res/node.png"
import projects from "../data/projects";
import {withTranslation} from "react-i18next";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {Launch} from "@material-ui/icons";
import GalleryDialog from "./gallery-dialog";

const classes = (theme) => ({
    line: {
        background: '#0e0153',
        width: '200px',
        height: '5px'
    },
    appTitle: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            justifyContent: 'center'
        },
    },
    separator: {
        width: '100%',
        height: '1px',
        background: '#dedede'
    }
});

class MyProjectsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    setOpen = (value)=> {
      this.setState({
          open: value
      });
    };

    handleClickOpen = () => {
        this.setOpen(true);
    };

    handleClose = () => {
        this.setOpen(false);
    };

    render() {
        const {theme, classes, t} = this.props;
        return <div>
            <Grid
                container
                spacing={6}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item container justify="center" direction="column" alignItems="center" >
                    <Typography style={{color: '#0e0153'}} gutterBottom variant="h4">
                        {t("MY_PROJECTS_MAJ")}
                    </Typography>
                    <div className={classes.line}></div>
                </Grid>


                <Container maxWidth="md">
                    <Grid container direction="column" justify="center" alignItems="center" spacing={6}>
                        {projects.map( (project, index) =>
                            [<Grid item container direction="row" justify="center" alignItems="center">
                                {/*<Hidden mdUp>*/}
                                <Grid item container justify="center" alignItems="center" xs={8} md={7}>
                                    <img src={project.picture} style={{width: '100%', height: 'auto'}}/>
                                </Grid>
                                <Grid item container direction="column" justify="flex-start" alignItems="stretch"
                                      xs={10} md={5}>
                                    <Grid item>
                                        <Typography variant="h4" className={classes.appTitle}>
                                            {t(project.title)}
                                            <IconButton onClick={this.handleClickOpen} aria-label="delete" style={{
                                                transform: 'translate(-10px,-15px)'
                                            }} >
                                                <Launch fontSize="small" />
                                            </IconButton>
                                            <Chip size="small"
                                                  style={{background:'#0e0153',color:'white'}}
                                                  label={project.year} />
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Typography paragraph className={classes.appTitle}>
                                            {t(project.desciption)}
                                        </Typography>
                                    </Grid>
                                    <Grid item container direction="row" className={classes.appTitle}
                                          alignItems="center">
                                        {
                                            project.technologies.map(tech =>
                                                <Grid item xs={2} md={3}>
                                                    <img src={tech} style={{width: '100%', height: 'auto'}}/>
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                                {/*</Hidden>*/}
                                {/*<Grid item xs={2} md={1} ></Grid>*/}
                                {/*<Grid item container justify="center" alignItems="center" xs={8} md={5}>*/}
                                {/*    <img src={laptop} style={{width:'100%', height:'auto'}}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={2} md={1}></Grid>*/}

                                {/*<Hidden mdUp>*/}
                                {/*    <Grid item xs={2}></Grid>*/}
                                {/*</Hidden>*/}

                                {/*<Grid item xs={10} md={4}>*/}

                                {/*</Grid>*/}
                                {/*<Grid item xs={2} md={1}></Grid>*/}


                            </Grid>,
                                (index !== projects.length - 1) ? <div className={classes.separator}></div> : '']
                        )
                        }
                        <GalleryDialog open={this.state.open} handleClose={this.handleClose}/>


                    </Grid>
                </Container>

            </Grid>
        </div>
    }
}

export default withTranslation()(withStyles(classes, {withTheme: true})(MyProjectsComponent));