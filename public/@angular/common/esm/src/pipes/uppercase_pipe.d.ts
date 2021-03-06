import { PipeTransform } from '@angular/core';
/**
 * Implements uppercase transforms to text.
 *
 * ### Example
 *
 * {@example core/pipes/ts/lowerupper_pipe/lowerupper_pipe_example.ts region='LowerUpperPipe'}
 *
 * @experimental
 */
export declare class UpperCasePipe implements PipeTransform {
    transform(value: string): string;
}
