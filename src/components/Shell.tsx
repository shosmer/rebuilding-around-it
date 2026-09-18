import type {ReactNode} from 'react';
import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {Layout, LayoutContent} from '@astryxdesign/core/Layout';
import {VStack} from '@astryxdesign/core/VStack';
import {Divider} from '@astryxdesign/core/Divider';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {PATHS, type Route} from '../router';
import {SOURCE} from '../data/report';

export function Shell({route, children}: {route: Route; children: ReactNode}) {
  return (
    <AppShell
      contentPadding={0}
      topNav={
        <TopNav
          heading={<TopNavHeading heading="Rebuilding around it" headingHref={PATHS.home} />}
          startContent={
            <>
              <TopNavItem label="Designers" href={PATHS.designers} isSelected={route === 'designers'} />
              <TopNavItem label="Product & tech leaders" href={PATHS.leaders} isSelected={route === 'leaders'} />
              <TopNavItem label="Risk & operations" href={PATHS.risk} isSelected={route === 'risk'} />
            </>
          }
        />
      }>
      <Layout
        contentWidth={880}
        content={
          <LayoutContent>
            <VStack gap={10} paddingInline={4} paddingBlock={8}>
              {children}
              <Divider />
              <VStack gap={2}>
                <Text type="supporting">
                  Figures from{' '}
                  <Link href={SOURCE.url} isExternalLink>
                    {SOURCE.title}
                  </Link>{' '}
                  by {SOURCE.publisher}. {SOURCE.n} designers surveyed in 60+ countries, fielded {SOURCE.fielded}.
                </Text>
                <Text type="supporting">{SOURCE.caveat}</Text>
                <Text type="supporting">
                  Read and re-cut by Shannon Hosmer, design leader. The interpretation is mine; the numbers are theirs.
                </Text>
              </VStack>
            </VStack>
          </LayoutContent>
        }
      />
    </AppShell>
  );
}
