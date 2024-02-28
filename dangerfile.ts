import { danger, warn,message } from 'danger'

message('hello! danger!')

const hasModifiedPackageJson =
  danger.git.modified_files.includes('package.json' )
const hasModifiedPackageLockJson =
  danger.git.modified_files.includes('package.json' )
// package.jsonに修正があるが、package-lock.jsonにない
if (hasModifiedPackageJson && !hasModifiedPackageLockJson)
  warn(
    'package.jsonが修正されていますが、package-lock.jsonが修正されていないようです。',
  )
