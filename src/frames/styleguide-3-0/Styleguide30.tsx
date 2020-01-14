import * as React from "react";
import {StyleSheet, Frame, View, Text, Component} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import {GistLogo} from "../../components/icons/GistLogo";
import {GitHubLogo} from "../../components/icons/GitHubLogo";
import {GitHubMark} from "../../components/icons/GitHubMark";
import {Markdown} from "../../components/icons/Markdown";
import {Octoface} from "../../components/icons/Octoface";
import {Paintcan} from "../../components/icons/Paintcan";
import {Thumbsdown} from "../../components/icons/Thumbsdown";
import {Smiley} from "../../components/icons/Smiley";
import {GistSecret} from "../../components/icons/GistSecret";
import {Thumbsup} from "../../components/icons/Thumbsup";
import {Hubot} from "../../components/icons/Hubot";
import {Organization} from "../../components/icons/Organization";
import {Person} from "../../components/icons/Person";
import {Eye} from "../../components/icons/Eye";
import {EyeClosed} from "../../components/icons/EyeClosed";
import {Jersey} from "../../components/icons/Jersey";
import {Code} from "../../components/icons/Code";
import {DiffAdded} from "../../components/icons/DiffAdded";
import {DiffIgnored} from "../../components/icons/DiffIgnored";
import {Gist} from "../../components/icons/Gist";
import {DiffModified} from "../../components/icons/DiffModified";
import {DiffRemoved} from "../../components/icons/DiffRemoved";
import {GitCommit} from "../../components/icons/GitCommit";
import {DiffRenamed} from "../../components/icons/DiffRenamed";
import {GitCompare} from "../../components/icons/GitCompare";
import {Diff} from "../../components/icons/Diff";
import {GitBranch} from "../../components/icons/GitBranch";
import {GitMerge} from "../../components/icons/GitMerge";
import {Database} from "../../components/icons/Database";
import {GitPullRequest} from "../../components/icons/GitPullRequest";
import {IssueClosed} from "../../components/icons/IssueClosed";
import {IssueOpened} from "../../components/icons/IssueOpened";
import {IssueReopened} from "../../components/icons/IssueReopened";
import {CircuitBoard} from "../../components/icons/CircuitBoard";
import {NoNewLine} from "../../components/icons/NoNewLine";
import {Broadcast} from "../../components/icons/Broadcast";
import {Keyboard} from "../../components/icons/Keyboard";
import {FileZip} from "../../components/icons/FileZip";
import {FileBinary} from "../../components/icons/FileBinary";
import {FileCode} from "../../components/icons/FileCode";
import {FileDirectory} from "../../components/icons/FileDirectory";
import {FileMedia} from "../../components/icons/FileMedia";
import {FilePdf} from "../../components/icons/FilePdf";
import {FileSubmodule} from "../../components/icons/FileSubmodule";
import {FileSymlinkDirectory} from "../../components/icons/FileSymlinkDirectory";
import {FileSymlinkFile} from "../../components/icons/FileSymlinkFile";
import {Browser} from "../../components/icons/Browser";
import {File} from "../../components/icons/File";
import {RepoClone} from "../../components/icons/RepoClone";
import {RepoForcePush} from "../../components/icons/RepoForcePush";
import {RepoForked} from "../../components/icons/RepoForked";
import {RepoPull} from "../../components/icons/RepoPull";
import {RepoPush} from "../../components/icons/RepoPush";
import {Repo} from "../../components/icons/Repo";
import {Ruby} from "../../components/icons/Ruby";
import {Mirror} from "../../components/icons/Mirror";
import {Server} from "../../components/icons/Server";
import {Terminal} from "../../components/icons/Terminal";
import {RadioTower} from "../../components/icons/RadioTower";
import {Rss} from "../../components/icons/Rss";
import {Versions} from "../../components/icons/Versions";
import {Dependent} from "../../components/icons/Dependent";
import {RepoTemplate} from "../../components/icons/RepoTemplate";
import {RepoTemplatePrivate} from "../../components/icons/RepoTemplatePrivate";
import {Workflow} from "../../components/icons/Workflow";
import {WorkflowAll} from "../../components/icons/WorkflowAll";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 85,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 85
    },
    iconsLine: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "flex-start",
        maxWidth: 660,
        flexWrap: "wrap"
    },
    iconComponent: {
        marginBottom: 20,
        marginRight: 20,
        minWidth: 16,
        maxHeight: 16,
        justifyContent: "center"
    }
});

export const Styleguide30 = (props) => {
    return <Frame name="Styleguide 3-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 69}}>
            <StyleguideSeparatorWrapper>
                <StyleguideLabel text="Logos" />
            </StyleguideSeparatorWrapper>
            <View style={styles.iconsLine}>
                <Component name="logo-gist" style={styles.iconComponent}>
                    <GistLogo />
                </Component>
                <Component name="logo-github" style={styles.iconComponent}>
                    <GitHubLogo />
                </Component>
                <Component name="logo-github-mark" style={styles.iconComponent}>
                    <GitHubMark />
                </Component>
                <Component name="logo-markdown" style={styles.iconComponent}>
                    <Markdown />
                </Component>
                <Component name="logo-octoface" style={styles.iconComponent}>
                    <Octoface />
                </Component>
                <Component name="logo-paintcan" style={styles.iconComponent}>
                    <Paintcan />
                </Component>
            </View>
            <View style={{marginTop: 80}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="People" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Component name="icon-thumbsdown" style={styles.iconComponent}>
                    <Thumbsdown />
                </Component>
                <Component name="icon-smiley" style={styles.iconComponent}>
                    <Smiley />
                </Component>
                <Component name="icon-gist-secret" style={styles.iconComponent}>
                    <GistSecret />
                </Component>
                <Component name="icon-thumbsup" style={styles.iconComponent}>
                    <Thumbsup />
                </Component>
                <Component name="icon-hubot" style={styles.iconComponent}>
                    <Hubot />
                </Component>
                <Component name="icon-organization" style={styles.iconComponent}>
                    <Organization />
                </Component>
                <Component name="icon-person" style={styles.iconComponent}>
                    <Person />
                </Component>
                <Component name="icon-eye" style={styles.iconComponent}>
                    <Eye  />
                </Component>
                <Component name="icon-eye-closed" style={styles.iconComponent}>
                    <EyeClosed />
                </Component>
                <Component name="icon-jersey" style={styles.iconComponent}>
                    <Jersey />
                </Component>
            </View>
            <View style={{marginTop: 80}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="Developer" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Component name="icon-code" style={styles.iconComponent}>
                    <Code />
                </Component>
                <Component name="icon-diff-added" style={styles.iconComponent}>
                    <DiffAdded  />
                </Component>
                <Component name="icon-diff-ignored" style={styles.iconComponent}>
                    <DiffIgnored  />
                </Component>
                <Component name="icon-gist" style={styles.iconComponent}>
                    <Gist />
                </Component>
                <Component name="icon-diff-modified" style={styles.iconComponent}>
                    <DiffModified />
                </Component>
                <Component name="icon-diff-removed" style={styles.iconComponent}>
                    <DiffRemoved />
                </Component>
                <Component name="icon-git-commit" style={styles.iconComponent}>
                    <GitCommit />
                </Component>
                <Component name="icon-diff-renamed" style={styles.iconComponent}>
                    <DiffRenamed />
                </Component>
                <Component name="icon-git-compare" style={styles.iconComponent}>
                    <GitCompare />
                </Component>
                <Component name="icon-diff" style={styles.iconComponent}>
                    <Diff />
                </Component>
                <Component name="icon-git-branch" style={styles.iconComponent}>
                    <GitBranch />
                </Component>
                <Component name="icon-git-merge" style={styles.iconComponent}>
                    <GitMerge />
                </Component>
                <Component name="icon-database" style={styles.iconComponent}>
                    <Database />
                </Component>
                <Component name="icon-git-pull-request" style={styles.iconComponent}>
                    <GitPullRequest />
                </Component>
                <Component name="icon-issue-closed" style={styles.iconComponent}>
                    <IssueClosed />
                </Component>
                <Component name="icon-issue-opened" style={styles.iconComponent}>
                    <IssueOpened />
                </Component>
                <Component name="icon-issue-reopened" style={styles.iconComponent}>
                    <IssueReopened />
                </Component>
                <Component name="icon-circuit-board" style={styles.iconComponent}>
                    <CircuitBoard />
                </Component>
                <Component name="icon-no-new-line" style={styles.iconComponent}>
                    <NoNewLine />
                </Component>
                <Component name="icon-broadcast" style={styles.iconComponent}>
                    <Broadcast />
                </Component>
                <Component name="icon-keyboard" style={styles.iconComponent}>
                    <Keyboard />
                </Component>
                <Component name="icon-file-zip" style={styles.iconComponent}>
                    <FileZip />
                </Component>
                <Component name="icon-file-binary" style={styles.iconComponent}>
                    <FileBinary />
                </Component>
                <Component name="icon-file-copy" style={styles.iconComponent}>
                    <FileCode />
                </Component>
                <Component name="icon-file-directory" style={styles.iconComponent}>
                    <FileDirectory />
                </Component>
                <Component name="icon-file-media" style={styles.iconComponent}>
                    <FileMedia />
                </Component>
                <Component name="icon-file-pdf" style={styles.iconComponent}>
                    <FilePdf />
                </Component>
                <Component name="icon-file-submodule" style={styles.iconComponent}>
                    <FileSubmodule />
                </Component>
                <Component name="icon-file-symlink-directory" style={styles.iconComponent}>
                    <FileSymlinkDirectory />
                </Component>
                <Component name="icon-file-symlink-file" style={styles.iconComponent}>
                    <FileSymlinkFile />
                </Component>
                <Component name="icon-browser" style={styles.iconComponent}>
                    <Browser />
                </Component>
                <Component name="icon-file" style={styles.iconComponent}>
                    <File />
                </Component>
                <Component name="icon-repo-clone" style={styles.iconComponent}>
                    <RepoClone />
                </Component>
                <Component name="icon-repo-force-push" style={styles.iconComponent}>
                    <RepoForcePush />
                </Component>
                <Component name="icon-repo-forked" style={styles.iconComponent}>
                    <RepoForked />
                </Component>
                <Component name="icon-repo-pull" style={styles.iconComponent}>
                    <RepoPull />
                </Component>
                <Component name="icon-repo-push" style={styles.iconComponent}>
                    <RepoPush />
                </Component>
                <Component name="icon-repo" style={styles.iconComponent}>
                    <Repo />
                </Component>
                <Component name="icon-ruby" style={styles.iconComponent}>
                    <Ruby />
                </Component>
                <Component name="icon-mirror" style={styles.iconComponent}>
                    <Mirror />
                </Component>
                <Component name="icon-server" style={styles.iconComponent}>
                    <Server />
                </Component>
                <Component name="icon-terminal" style={styles.iconComponent}>
                    <Terminal />
                </Component>
                <Component name="icon-radio-tower" style={styles.iconComponent}>
                    <RadioTower />
                </Component>
                <Component name="icon-rss" style={styles.iconComponent}>
                    <Rss />
                </Component>
                <Component name="icon-versions" style={styles.iconComponent}>
                    <Versions />
                </Component>
                <Component name="icon-dependent" style={styles.iconComponent}>
                    <Dependent />
                </Component>
                <Component name="icon-repo-template" style={styles.iconComponent}>
                    <RepoTemplate />
                </Component>
                <Component name="icon-repo-template-private" style={styles.iconComponent}>
                    <RepoTemplatePrivate />
                </Component>
                <Component name="icon-workflow" style={styles.iconComponent}>
                    <Workflow />
                </Component>
                <Component name="workflow-all" style={styles.iconComponent}>
                    <WorkflowAll />
                </Component>
            </View>
        </View>
    </Frame>
};
