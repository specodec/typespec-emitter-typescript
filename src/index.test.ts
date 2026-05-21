import { describe, it, expect } from 'vitest';
import { mkScalar, mkArray } from '@specodec/typespec-emitter-core/test-utils';
import { typeToTs, readExpr, writeExpr, writeLines, defaultValue } from './index.js';

describe('typeToTs', () => {
  it('string → string', () => expect(typeToTs(mkScalar('string') as any)).toBe('string'));
  it('boolean → boolean', () => expect(typeToTs(mkScalar('boolean') as any)).toBe('boolean'));
  it('int32 → number', () => expect(typeToTs(mkScalar('int32') as any)).toBe('number'));
  it('int64 → bigint', () => expect(typeToTs(mkScalar('int64') as any)).toBe('bigint'));
  it('float32 → number', () => expect(typeToTs(mkScalar('float32') as any)).toBe('number'));
  it('float64 → number', () => expect(typeToTs(mkScalar('float64') as any)).toBe('number'));
  it('bytes → Uint8Array', () => expect(typeToTs(mkScalar('bytes') as any)).toBe('Uint8Array'));
  it('model → model name', () => expect(typeToTs({ kind: 'Model', name: 'User' } as any)).toBe('User'));
});

describe('readExpr', () => {
  it('int32', () => expect(readExpr(mkScalar('int32') as any)).toContain('readInt32'));
  it('string', () => expect(readExpr(mkScalar('string') as any)).toContain('readString'));
  it('bool', () => expect(readExpr(mkScalar('boolean') as any)).toContain('readBool'));
  it('float32', () => expect(readExpr(mkScalar('float32') as any)).toContain('readFloat32'));
  it('bytes', () => expect(readExpr(mkScalar('bytes') as any)).toContain('readBytes'));
});
