---
title: Files
nav: cofh-world
---

This page describes the files that are used to [configure the world
generation](/docs/cofh-world/world-generator-configuration/) of [CoFH
World](/docs/cofh-world/).


File structure
--------------

The world generator configuration is specified by `.json` files in the
`cofh/world` directory inside Minecraft Forge's `config` directory. The
directory is read recursively, so the files may be grouped in subfolders.

The `cofh/world` directory contains one or more files by default:
`00_minecraft.json`, and the default files added by [Thermal
Foundation](/docs/thermal-foundation/) if it is installed. Other mods may also
add files for their default world generation.

The files in the directory are read in alphabetical order. This can be used to
make certain features generate before others.

`00_minecraft.json` is a special file that is *not read by default*. It contains
configuration for generating most of the features that Minecraft generates in
worlds by default, such as ores. Setting `ReplaceStandardGeneration` to `true`
in CoFH World's mod configuration file disables much of Minecraft's own feature
generation and makes it so that `00_minecraft.json` is read instead. This allows
users to adjust or disable the generation of these features.


File format
-----------

All world generation files must contain valid [JSON](http://www.json.org/) or
[HOCON](https://github.com/lightbend/config/blob/master/HOCON.md) data. From now
on, JSON terms will be used to describe the format of the data.

Every file contains a single 'root' object. This object must contain a value
named `populate`, which describes the features to generate in the world. The
root object may also contain a value named `dependencies`, which describes the
mod or mods that must be loaded to read the file.

### populate
The `populate` value is an object whose values each describe a feature to
generate in the world (or: to 'populate' the world with). [Feature
format](/docs/cofh-world/world-generator-configuration/feature-format/) further describes
how to specify a feature.

### dependencies
The `dependencies` value is either a single Forge mod entry, or an array of
them. If one of the specified dependencies is not loaded, the entire file will
be ignored.

Forge mod entries are objects with the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Value</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`id`</td>
                <td>String</td>
                <td>-</td>
                <td>The internal mod ID that the mod registers itself with.</td>
            </tr>
            <tr>
                <td markdown="span">`version` (optional)</td>
                <td>String</td>
                <td>(Any version)</td>
                <td markdown="span">
                    The version of the mod. May be a specific version, or a
                    [Maven-compatible version range](http://maven.apache.org/enforcer/enforcer-rules/versionRanges.html).
                </td>
            </tr>
            <tr>
                <td markdown="span">`exclude` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, the file will only be read if the specified mod
                    is *not* installed.
                </td>
            </tr>
        </tbody>
    </table>
</div>

A Forge mod entry may also be specified as a string. In that case, it is read as
the `id` value.


Examples
--------

Coming soon...


Tips
----

* If world generation is not working as intended, try checking the log. Any
  errors that are found in the files are logged while the configuration is
  loaded.
* Using [`/cofhworld reload`](/docs/cofh-world/commands/#reload) allows for
  reloading the configuration without restarting the game.
