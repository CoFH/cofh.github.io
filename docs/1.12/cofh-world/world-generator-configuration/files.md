---
category: Configuration
show-image: false
title: Files
---

This page describes the files that are used to [configure the world
generation](../) of [CoFH World](../../).


File structure
--------------

The world generator configuration is specified by `.json` files in the
`cofh/world` directory inside Minecraft Forge's `config` directory. The
directory is read recursively, so the files may be grouped in subfolders.

The `cofh/world` directory contains one or more files by default:
`00_minecraft.json`, and the default files added by [Thermal
Foundation](../../../thermal-foundation/) if it is installed. Other mods may
also add files for their default world generation.

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

Each world generation file consists of a single object with the following
values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`populate`</td>
                <td>Object</td>
                <td>-</td>
                <td markdown="span">
                    An object whose values each describe a feature to generate
                    in the world (or: to 'populate' the world with). The page
                    [Feature format](../feature-format/)
                    describes how to specify a feature.
                </td>
            </tr>
            <tr>
                <td markdown="span">`dependencies` (optional)</td>
                <td markdown="span">
                    [Forge mod entry](#forge-mod-entry) / array of Forge mod
                    entries
                </td>
                <td>(None)</td>
                <td markdown="span">
                    The mod or mods that must be loaded in order for the file to
                    be read. If any of the specified mods are not loaded, the
                    entire file is skipped.
                </td>
            </tr>
            <tr>
                <td markdown="span">`enabled` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td markdown="span">
                    Whether the file should be read at all. If set to `false`,
                    the entire file is skipped.
                </td>
            </tr>
            <tr>
                <td markdown="span">`priority` (optional)</td>
                <td>Number</td>
                <td markdown="span">`0`</td>
                <td>
                    The loading priority of the file. Files with a higher
                    priority are read first.
                </td>
            </tr>
            <tr>
                <td markdown="span">`namespace` (optional)</td>
                <td>String</td>
                <td markdown="span">(None)</td>
                <td markdown="span">
                    When specified, this string is prepended to the names of the
                    features described in `populate`. This can be used to
                    prevent name conflicts with features described in other
                    files.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Forge mod entry
A Forge mod entry describes a mod, optionally with a specific version or range
of versions. It is an object with the following values.

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
* Using [`/cofhworld reload`](../../commands/#reload) allows for reloading the
  configuration without restarting the game.
