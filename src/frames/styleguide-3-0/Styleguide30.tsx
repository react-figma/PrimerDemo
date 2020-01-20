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
import {spacingScale} from "../../tokens/spacingScale";

const {spacer3, spacer5} = spacingScale;

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
    iconComponent5: {
        marginBottom: spacer5,
        marginRight: spacer5,
        minWidth: spacer5,
        maxHeight: spacer5,
        justifyContent: "center"
    },
    iconComponent3: {
        marginBottom: spacer3,
        marginRight: spacer3,
        minWidth: spacer3,
        maxHeight: spacer3,
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
                <Component name="logo-gist-5" style={styles.iconComponent5}>
                    <GistLogo height={spacer5} />
                </Component>
                <Component name="logo-github-5" style={styles.iconComponent5}>
                    <GitHubLogo height={spacer5} />
                </Component>
                <Component name="logo-github-mark-5" style={styles.iconComponent5}>
                    <GitHubMark height={spacer5} />
                </Component>
                <Component name="logo-markdown-5" style={styles.iconComponent5}>
                    <Markdown height={spacer5} />
                </Component>
                <Component name="logo-octoface-5" style={styles.iconComponent5}>
                    <Octoface height={spacer5} />
                </Component>
                <Component name="logo-paintcan-5" style={styles.iconComponent5}>
                    <Paintcan height={spacer5} />
                </Component>
            </View>
            <View style={styles.iconsLine}>
                <Component name="logo-gist-3" style={styles.iconComponent3}>
                    <GistLogo height={spacer3} />
                </Component>
                <Component name="logo-github-3" style={styles.iconComponent3}>
                    <GitHubLogo height={spacer3} />
                </Component>
                <Component name="logo-github-mark-3" style={styles.iconComponent3}>
                    <GitHubMark height={spacer3} />
                </Component>
                <Component name="logo-markdown-3" style={styles.iconComponent3}>
                    <Markdown height={spacer3} />
                </Component>
                <Component name="logo-octoface-3" style={styles.iconComponent3}>
                    <Octoface height={spacer3} />
                </Component>
                <Component name="logo-paintcan-3" style={styles.iconComponent3}>
                    <Paintcan height={spacer3} />
                </Component>
            </View>
            <View style={{marginTop: 80}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="People" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Component name="icon-thumbsdown-5" style={styles.iconComponent5}>
                    <Thumbsdown height={spacer5} />
                </Component>
                <Component name="icon-smiley-5" style={styles.iconComponent5}>
                    <Smiley height={spacer5} />
                </Component>
                <Component name="icon-gist-secret-5" style={styles.iconComponent5}>
                    <GistSecret height={spacer5} />
                </Component>
                <Component name="icon-thumbsup-5" style={styles.iconComponent5}>
                    <Thumbsup height={spacer5} />
                </Component>
                <Component name="icon-hubot-5" style={styles.iconComponent5}>
                    <Hubot height={spacer5} />
                </Component>
                <Component name="icon-organization-5" style={styles.iconComponent5}>
                    <Organization height={spacer5} />
                </Component>
                <Component name="icon-person-5" style={styles.iconComponent5}>
                    <Person height={spacer5} />
                </Component>
                <Component name="icon-eye-5" style={styles.iconComponent5}>
                    <Eye height={spacer5} />
                </Component>
                <Component name="icon-eye-closed-5" style={styles.iconComponent5}>
                    <EyeClosed height={spacer5} />
                </Component>
                <Component name="icon-jersey-5" style={styles.iconComponent5}>
                    <Jersey height={spacer5} />
                </Component>
            </View>
            <View style={styles.iconsLine}>
                <Component name="icon-thumbsdown-3" style={styles.iconComponent3}>
                    <Thumbsdown height={spacer3} />
                </Component>
                <Component name="icon-smiley-3" style={styles.iconComponent3}>
                    <Smiley height={spacer3} />
                </Component>
                <Component name="icon-gist-secret-3" style={styles.iconComponent3}>
                    <GistSecret height={spacer3} />
                </Component>
                <Component name="icon-thumbsup-3" style={styles.iconComponent3}>
                    <Thumbsup height={spacer3} />
                </Component>
                <Component name="icon-hubot-3" style={styles.iconComponent3}>
                    <Hubot height={spacer3} />
                </Component>
                <Component name="icon-organization-3" style={styles.iconComponent3}>
                    <Organization height={spacer3} />
                </Component>
                <Component name="icon-person-3" style={styles.iconComponent3}>
                    <Person height={spacer3} />
                </Component>
                <Component name="icon-eye-3" style={styles.iconComponent3}>
                    <Eye height={spacer3} />
                </Component>
                <Component name="icon-eye-closed-3" style={styles.iconComponent3}>
                    <EyeClosed height={spacer3} />
                </Component>
                <Component name="icon-jersey-3" style={styles.iconComponent3}>
                    <Jersey height={spacer3} />
                </Component>
            </View>
            <View style={{marginTop: 80}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="Developer" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.iconsLine}>
                <Component name="icon-code-5" style={styles.iconComponent5}>
                    <Code height={spacer5} />
                </Component>
                <Component name="icon-diff-added-5" style={styles.iconComponent5}>
                    <DiffAdded height={spacer5} />
                </Component>
                <Component name="icon-diff-ignored-5" style={styles.iconComponent5}>
                    <DiffIgnored height={spacer5} />
                </Component>
                <Component name="icon-gist-5" style={styles.iconComponent5}>
                    <Gist height={spacer5} />
                </Component>
                <Component name="icon-diff-modified-5" style={styles.iconComponent5}>
                    <DiffModified height={spacer5} />
                </Component>
                <Component name="icon-diff-removed-5" style={styles.iconComponent5}>
                    <DiffRemoved height={spacer5} />
                </Component>
                <Component name="icon-git-commit-5" style={styles.iconComponent5}>
                    <GitCommit height={spacer5} />
                </Component>
                <Component name="icon-diff-renamed-5" style={styles.iconComponent5}>
                    <DiffRenamed height={spacer5} />
                </Component>
                <Component name="icon-git-compare-5" style={styles.iconComponent5}>
                    <GitCompare height={spacer5} />
                </Component>
                <Component name="icon-diff-5" style={styles.iconComponent5}>
                    <Diff height={spacer5} />
                </Component>
                <Component name="icon-git-branch-5" style={styles.iconComponent5}>
                    <GitBranch height={spacer5} />
                </Component>
                <Component name="icon-git-merge-5" style={styles.iconComponent5}>
                    <GitMerge height={spacer5} />
                </Component>
                <Component name="icon-database-5" style={styles.iconComponent5}>
                    <Database height={spacer5} />
                </Component>
                <Component name="icon-git-pull-request-5" style={styles.iconComponent5}>
                    <GitPullRequest height={spacer5} />
                </Component>
                <Component name="icon-issue-closed-5" style={styles.iconComponent5}>
                    <IssueClosed height={spacer5} />
                </Component>
                <Component name="icon-issue-opened-5" style={styles.iconComponent5}>
                    <IssueOpened height={spacer5} />
                </Component>
                <Component name="icon-issue-reopened-5" style={styles.iconComponent5}>
                    <IssueReopened height={spacer5} />
                </Component>
                <Component name="icon-circuit-board-5" style={styles.iconComponent5}>
                    <CircuitBoard height={spacer5} />
                </Component>
                <Component name="icon-no-new-line-5" style={styles.iconComponent5}>
                    <NoNewLine height={spacer5} />
                </Component>
                <Component name="icon-broadcast-5" style={styles.iconComponent5}>
                    <Broadcast height={spacer5} />
                </Component>
                <Component name="icon-keyboard-5" style={styles.iconComponent5}>
                    <Keyboard height={spacer5} />
                </Component>
                <Component name="icon-file-zip-5" style={styles.iconComponent5}>
                    <FileZip height={spacer5} />
                </Component>
                <Component name="icon-file-binary-5" style={styles.iconComponent5}>
                    <FileBinary height={spacer5} />
                </Component>
                <Component name="icon-file-copy-5" style={styles.iconComponent5}>
                    <FileCode height={spacer5} />
                </Component>
                <Component name="icon-file-directory-5" style={styles.iconComponent5}>
                    <FileDirectory height={spacer5} />
                </Component>
                <Component name="icon-file-media-5" style={styles.iconComponent5}>
                    <FileMedia height={spacer5} />
                </Component>
                <Component name="icon-file-pdf-5" style={styles.iconComponent5}>
                    <FilePdf height={spacer5} />
                </Component>
                <Component name="icon-file-submodule-5" style={styles.iconComponent5}>
                    <FileSubmodule height={spacer5} />
                </Component>
                <Component name="icon-file-symlink-directory-5" style={styles.iconComponent5}>
                    <FileSymlinkDirectory height={spacer5} />
                </Component>
                <Component name="icon-file-symlink-file-5" style={styles.iconComponent5}>
                    <FileSymlinkFile height={spacer5} />
                </Component>
                <Component name="icon-browser-5" style={styles.iconComponent5}>
                    <Browser height={spacer5} />
                </Component>
                <Component name="icon-file-5" style={styles.iconComponent5}>
                    <File height={spacer5} />
                </Component>
                <Component name="icon-repo-clone-5" style={styles.iconComponent5}>
                    <RepoClone height={spacer5} />
                </Component>
                <Component name="icon-repo-force-push-5" style={styles.iconComponent5}>
                    <RepoForcePush height={spacer5} />
                </Component>
                <Component name="icon-repo-forked-5" style={styles.iconComponent5}>
                    <RepoForked height={spacer5} />
                </Component>
                <Component name="icon-repo-pull-5" style={styles.iconComponent5}>
                    <RepoPull height={spacer5} />
                </Component>
                <Component name="icon-repo-push-5" style={styles.iconComponent5}>
                    <RepoPush height={spacer5} />
                </Component>
                <Component name="icon-repo-5" style={styles.iconComponent5}>
                    <Repo height={spacer5} />
                </Component>
                <Component name="icon-ruby-5" style={styles.iconComponent5}>
                    <Ruby height={spacer5} />
                </Component>
                <Component name="icon-mirror-5" style={styles.iconComponent5}>
                    <Mirror height={spacer5} />
                </Component>
                <Component name="icon-server-5" style={styles.iconComponent5}>
                    <Server height={spacer5} />
                </Component>
                <Component name="icon-terminal-5" style={styles.iconComponent5}>
                    <Terminal height={spacer5} />
                </Component>
                <Component name="icon-radio-tower-5" style={styles.iconComponent5}>
                    <RadioTower height={spacer5} />
                </Component>
                <Component name="icon-rss-5" style={styles.iconComponent5}>
                    <Rss height={spacer5} />
                </Component>
                <Component name="icon-versions-5" style={styles.iconComponent5}>
                    <Versions height={spacer5} />
                </Component>
                <Component name="icon-dependent-5" style={styles.iconComponent5}>
                    <Dependent height={spacer5} />
                </Component>
                <Component name="icon-repo-template-5" style={styles.iconComponent5}>
                    <RepoTemplate height={spacer5} />
                </Component>
                <Component name="icon-repo-template-private-5" style={styles.iconComponent5}>
                    <RepoTemplatePrivate height={spacer5} />
                </Component>
                <Component name="icon-workflow-5" style={styles.iconComponent5}>
                    <Workflow height={spacer5} />
                </Component>
                <Component name="workflow-all-5" style={styles.iconComponent5}>
                    <WorkflowAll height={spacer5} />
                </Component>
            </View>
            <View style={styles.iconsLine}>
                <Component name="icon-code-3" style={styles.iconComponent3}>
                    <Code height={spacer3} />
                </Component>
                <Component name="icon-diff-added-3" style={styles.iconComponent3}>
                    <DiffAdded height={spacer3} />
                </Component>
                <Component name="icon-diff-ignored-3" style={styles.iconComponent3}>
                    <DiffIgnored height={spacer3} />
                </Component>
                <Component name="icon-gist-3" style={styles.iconComponent3}>
                    <Gist height={spacer3} />
                </Component>
                <Component name="icon-diff-modified-3" style={styles.iconComponent3}>
                    <DiffModified height={spacer3} />
                </Component>
                <Component name="icon-diff-removed-3" style={styles.iconComponent3}>
                    <DiffRemoved height={spacer3} />
                </Component>
                <Component name="icon-git-commit-3" style={styles.iconComponent3}>
                    <GitCommit height={spacer3} />
                </Component>
                <Component name="icon-diff-renamed-3" style={styles.iconComponent3}>
                    <DiffRenamed height={spacer3} />
                </Component>
                <Component name="icon-git-compare-3" style={styles.iconComponent3}>
                    <GitCompare height={spacer3} />
                </Component>
                <Component name="icon-diff-3" style={styles.iconComponent3}>
                    <Diff height={spacer3} />
                </Component>
                <Component name="icon-git-branch-3" style={styles.iconComponent3}>
                    <GitBranch height={spacer3} />
                </Component>
                <Component name="icon-git-merge-3" style={styles.iconComponent3}>
                    <GitMerge height={spacer3} />
                </Component>
                <Component name="icon-database-3" style={styles.iconComponent3}>
                    <Database height={spacer3} />
                </Component>
                <Component name="icon-git-pull-request-3" style={styles.iconComponent3}>
                    <GitPullRequest height={spacer3} />
                </Component>
                <Component name="icon-issue-closed-3" style={styles.iconComponent3}>
                    <IssueClosed height={spacer3} />
                </Component>
                <Component name="icon-issue-opened-3" style={styles.iconComponent3}>
                    <IssueOpened height={spacer3} />
                </Component>
                <Component name="icon-issue-reopened-3" style={styles.iconComponent3}>
                    <IssueReopened height={spacer3} />
                </Component>
                <Component name="icon-circuit-board-3" style={styles.iconComponent3}>
                    <CircuitBoard height={spacer3} />
                </Component>
                <Component name="icon-no-new-line-3" style={styles.iconComponent3}>
                    <NoNewLine height={spacer3} />
                </Component>
                <Component name="icon-broadcast-3" style={styles.iconComponent3}>
                    <Broadcast height={spacer3} />
                </Component>
                <Component name="icon-keyboard-3" style={styles.iconComponent3}>
                    <Keyboard height={spacer3} />
                </Component>
                <Component name="icon-file-zip-3" style={styles.iconComponent3}>
                    <FileZip height={spacer3} />
                </Component>
                <Component name="icon-file-binary-3" style={styles.iconComponent3}>
                    <FileBinary height={spacer3} />
                </Component>
                <Component name="icon-file-copy-3" style={styles.iconComponent3}>
                    <FileCode height={spacer3} />
                </Component>
                <Component name="icon-file-directory-3" style={styles.iconComponent3}>
                    <FileDirectory height={spacer3} />
                </Component>
                <Component name="icon-file-media-3" style={styles.iconComponent3}>
                    <FileMedia height={spacer3} />
                </Component>
                <Component name="icon-file-pdf-3" style={styles.iconComponent3}>
                    <FilePdf height={spacer3} />
                </Component>
                <Component name="icon-file-submodule-3" style={styles.iconComponent3}>
                    <FileSubmodule height={spacer3} />
                </Component>
                <Component name="icon-file-symlink-directory-3" style={styles.iconComponent3}>
                    <FileSymlinkDirectory height={spacer3} />
                </Component>
                <Component name="icon-file-symlink-file-3" style={styles.iconComponent3}>
                    <FileSymlinkFile height={spacer3} />
                </Component>
                <Component name="icon-browser-3" style={styles.iconComponent3}>
                    <Browser height={spacer3} />
                </Component>
                <Component name="icon-file-3" style={styles.iconComponent3}>
                    <File height={spacer3} />
                </Component>
                <Component name="icon-repo-clone-3" style={styles.iconComponent3}>
                    <RepoClone height={spacer3} />
                </Component>
                <Component name="icon-repo-force-push-3" style={styles.iconComponent3}>
                    <RepoForcePush height={spacer3} />
                </Component>
                <Component name="icon-repo-forked-3" style={styles.iconComponent3}>
                    <RepoForked height={spacer3} />
                </Component>
                <Component name="icon-repo-pull-3" style={styles.iconComponent3}>
                    <RepoPull height={spacer3} />
                </Component>
                <Component name="icon-repo-push-3" style={styles.iconComponent3}>
                    <RepoPush height={spacer3} />
                </Component>
                <Component name="icon-repo-3" style={styles.iconComponent3}>
                    <Repo height={spacer3} />
                </Component>
                <Component name="icon-ruby-3" style={styles.iconComponent3}>
                    <Ruby height={spacer3} />
                </Component>
                <Component name="icon-mirror-3" style={styles.iconComponent3}>
                    <Mirror height={spacer3} />
                </Component>
                <Component name="icon-server-3" style={styles.iconComponent3}>
                    <Server height={spacer3} />
                </Component>
                <Component name="icon-terminal-3" style={styles.iconComponent3}>
                    <Terminal height={spacer3} />
                </Component>
                <Component name="icon-radio-tower-3" style={styles.iconComponent3}>
                    <RadioTower height={spacer3} />
                </Component>
                <Component name="icon-rss-3" style={styles.iconComponent3}>
                    <Rss height={spacer3} />
                </Component>
                <Component name="icon-versions-3" style={styles.iconComponent3}>
                    <Versions height={spacer3} />
                </Component>
                <Component name="icon-dependent-3" style={styles.iconComponent3}>
                    <Dependent height={spacer3} />
                </Component>
                <Component name="icon-repo-template-3" style={styles.iconComponent3}>
                    <RepoTemplate height={spacer3} />
                </Component>
                <Component name="icon-repo-template-private-3" style={styles.iconComponent3}>
                    <RepoTemplatePrivate height={spacer3} />
                </Component>
                <Component name="icon-workflow-3" style={styles.iconComponent3}>
                    <Workflow height={spacer3} />
                </Component>
                <Component name="workflow-all-3" style={styles.iconComponent3}>
                    <WorkflowAll height={spacer3} />
                </Component>
            </View>
        </View>
    </Frame>
};
